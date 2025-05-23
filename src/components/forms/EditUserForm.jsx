import { useState, useEffect } from 'react'
import styles from './EditUserForm.module.css'
import { useNavigate } from 'react-router-dom'
import { fetchAddressByPostalCode } from '../../services/ViaCep'
import { getUser, updateUser } from '../../services/User';
function EditUserForm() {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    

    const [error, setError] = useState(null);
    
    const [currentStep, setCurrentStep] = useState(1);

    const [loadingCep, setLoadingCep] = useState(false);

    const userId = localStorage.getItem('userId');
    const [formData, setFormData] = useState({
        name: '',
        docType: '',
        document: '',
        birthDate: '',
        email: '',
        password: '',
        confirmPassword: '',
        addressDTO: {
            address: '',
            number: '',
            neighborhood: '',
            city: '',
            state: '',
            postalCode: '',
            complement: ''
        }
    });
    

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userProfile = await getUser(userId);
                setProfile(userProfile);
                setFormData(prevState => ({
                    ...prevState,
                    name: userProfile.name || '',
                    email: userProfile.email || '',
                    docType: userProfile.docType || '',
                    document: userProfile.document || '',
                    birthDate: userProfile.birthDate || '',
                    addressDTO: userProfile.addressDTO || {
                        address: userProfile.addressDTO.address,
                        number: userProfile.addressDTO.number,
                        neighborhood: userProfile.addressDTO.neighborhood,
                        city: userProfile.addressDTO.city,
                        state: userProfile.addressDTO.state,
                        postalCode: userProfile.addressDTO.postalCode,
                        complement: userProfile.addressDTO.complement
                    }
                }));
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [userId]);

    if (!profile) {
        return <div>Carregando...</div>;
    }

    
    const documentTypeMapping = {
        "RG": 1,
        "CPF": 2,
        "CNH": 3,
        "PASSAPORTE": 4,
        "CRNM": 5
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name.includes('addressDTO.')) {
            const addressField = name.split('.')[1];
            setFormData(prevState => ({
                ...prevState,
                addressDTO: {
                    ...prevState.addressDTO,
                    [addressField]: value
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: name === 'docType' ? documentTypeMapping[value] : value
            }));
        }
    };

    const handleCepBlur = async () => {
        const postalCode = formData.addressDTO.postalCode;
        if (!postalCode) return;

        setLoadingCep(true);
        setError(null);

        try {
            const address = await fetchAddressByPostalCode(postalCode);
            setFormData(prevState => ({
                ...prevState,
                addressDTO: {
                    ...prevState.addressDTO,
                    address: address.logradouro,
                    neighborhood: address.bairro,
                    city: address.localidade,
                    state: address.uf
                }
            }));
        } catch (error) {
            setError('Falha ao buscar o endereço. Verifique o CEP.');
        } finally {
            setLoadingCep(false);
        }
    };

    const handleSubmit = async (event) => {
        try {
            await updateUser(formData);
            alert('Informações atualizadas com sucesso!');
        } catch (error) {
            setError('Falha ao realizar o cadastro. Tente novamente.');
            event.preventDefault();
        }
    };

    const goToNextStep = () => {
        setError(null)
        if (formData.name === null && formData.email === null && formData.password === null) {
            setError('Você deve inserir todos os dados.');
        } else if (currentStep===2 && formData.docType === null && formData.document === null && formData.birthDate === '') {
            setError('Você deve inserir todos os dados.');
        } else {
        setCurrentStep(prevStep => prevStep + 1);
        }
    };

    return (
        <form className={styles.formSignUp}>
            {currentStep === 1 && (
                <section>
                    <article>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        <label htmlFor="name">Nome Completo</label>
                    </article>
                    <article>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        <label htmlFor="email">E-mail</label>
                    </article>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="button" onClick={goToNextStep}>Próxima Etapa</button>
                </section>
            )}
            {currentStep === 2 && (
                <section>
                    <article>
                        <select list="documents" id="documentType" name="docType" value={Object.keys(documentTypeMapping).find(key => documentTypeMapping[key] === formData.docType) || ''} onChange={handleChange} required >

                            <option value="RG">RG</option>
                            <option value="CPF">CPF</option>
                            <option value="CNH">CNH</option>
                            <option value="PASSAPORTE">PASSAPORTE</option>
                            <option value="CRNM">CRNM</option>
                        </select>
                        <label htmlFor="documentType">Tipo de Documento</label>
                    </article>
                    <article>
                        <input type="text" id="document" name="document" value={formData.document} onChange={handleChange} required />
                        <label htmlFor="document">Documento</label>
                    </article>
                    <article>
                        <input type="date" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
                        <label htmlFor="birthDate" className={styles.birthDate}>Data de Nascimento</label>
                    </article>
                    <button type="button" onClick={goToNextStep}>Próxima Etapa</button>
                </section>
            )}
            {currentStep === 3 && (
                <section>
                    <article>
                        <input type="text" id="postalCode" name="addressDTO.postalCode" value={formData.addressDTO.postalCode} onChange={handleChange} onBlur={handleCepBlur} required />
                        <label htmlFor="postalCode">CEP</label>
                        {loadingCep && <p>Buscando endereço...</p>}
                    </article>
                    <article>
                        <input type="number" id="number" name="addressDTO.number" value={formData.addressDTO.number} onChange={handleChange} required />
                        <label htmlFor="number">Número</label>
                    </article>
                    <article>
                        <input type="text" id="address" name="addressDTO.address" value={formData.addressDTO.address} onChange={handleChange} required />
                        <label htmlFor="address">Logradouro</label>
                    </article>
                    <article>
                        <input type="text" id="neighborhood" name="addressDTO.neighborhood" value={formData.addressDTO.neighborhood} onChange={handleChange} required />
                        <label htmlFor="neighborhood">Bairro</label>
                    </article>
                    <article>
                        <input type="text" id="city" name="addressDTO.city" value={formData.addressDTO.city} onChange={handleChange} required />
                        <label htmlFor="city">Cidade</label>
                    </article>
                    <article>
                        <select list="states" id="state" name="addressDTO.state" value={formData.addressDTO.state} onChange={handleChange} required>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                        <label htmlFor="state">Estado</label>
                    </article>
                    <p>Ao atualizar seus dados, você concorda com nossos Termos, Política de Privacidade e Política de Cookies.</p>

                    <button onClick={() => { handleSubmit(); navigate('/dados-pessoais'); }}>Atualizar Dados da Conta</button>
                </section>
            )}
        </form>
    )
}

export default EditUserForm;