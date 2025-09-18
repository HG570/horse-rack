import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './RegisterForm.module.css';
import { signUp } from '../../services/User';
import { useNavigate } from 'react-router-dom';
import { fetchAddressByPostalCode } from '../../services/ViaCep'
import InputMask from 'react-input-mask';
function RegisterForm({ currentStep, setCurrentStep}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: null,
        docType: 1,
        document: null,
        birthDate: null,
        email: null,
        password: null,
        confirmPassword: null,
        addressDTO: {
            address: null,
            number: null,
            neighborhood: null,
            city: null,
            state: null,
            postalCode: null,
            complement: null
        }
    });

    const maskMap = {
        RG: "99.999.999-9",
        CPF: "999.999.999-99",
        CNH: "99999999999",
        PASSAPORTE: "AA999999",
        CRNM: "99999999999",
        CEP: "99999-999"
    };
    const documentTypeMapping = {
        "RG": 1,
        "CPF": 2,
        "CNH": 3,
        "PASSAPORTE": 4,
        "CRNM": 5
    };

    const selectedKey = Object.keys(documentTypeMapping)
        .find(key => documentTypeMapping[key] === formData.docType) || 'RG'
    const currentMask = maskMap[selectedKey];
    const cepMask = maskMap["CEP"];

    const [error, setError] = useState(null);

    const [loadingCep, setLoadingCep] = useState(false);

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
        const postalCode = formData.addressDTO.postalCode.replace(/[^0-9]/g, '');
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
        event.preventDefault();
        try {
            formData.document = await formData.document.replace(/[^0-9]/g, '')
            formData.addressDTO.postalCode = await formData.addressDTO.postalCode.replace(/[^A-Za-z0-9]/g, '')
            await signUp(formData);
            await navigate('/signin');
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            switch (error.type) {
                case 'connection':
                    setError(error.message);
                    alert(error.message);
                    break;
                case 'validation':
                    setError(error.message);
                    alert(error.message);
                    break;
                default:
                    setError('Ocorreu um erro inesperado. Tente novamente.');
                    alert('Ocorreu um erro inesperado. Tente novamente.');
            }
        }
    };

    const goToNextStep = () => {
        setError(null)
        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        } else if (formData.name === null && formData.email === null && formData.password === null) {
            setError('Você deve inserir todos os dados.');
        } else if (currentStep === 2 && formData.docType === null && formData.document === null && formData.birthDate === '') {
            setError('Você deve inserir todos os dados.');
        } else {
            setCurrentStep(prevStep => prevStep + 1);
        }
    };

    const estadosMap = {
        AC: "Acre",
        AL: "Alagoas",
        AP: "Amapá",
        AM: "Amazonas",
        BA: "Bahia",
        CE: "Ceará",
        DF: "Distrito Federal",
        ES: "Espírito Santo",
        GO: "Goiás",
        MA: "Maranhão",
        MT: "Mato Grosso",
        MS: "Mato Grosso do Sul",
        MG: "Minas Gerais",
        PA: "Pará",
        PB: "Paraíba",
        PR: "Paraná",
        PE: "Pernambuco",
        PI: "Piauí",
        RJ: "Rio de Janeiro",
        RN: "Rio Grande do Norte",
        RS: "Rio Grande do Sul",
        RO: "Rondônia",
        RR: "Roraima",
        SC: "Santa Catarina",
        SP: "São Paulo",
        SE: "Sergipe",
        TO: "Tocantins"
    };

    return (
        <form className={styles.formSignUp} onSubmit={handleSubmit}>
            {currentStep === 1 && (
                <section>
                    <article>
                        <input type="text" id="name" name="name" value={formData.name ?? ''} onChange={handleChange} required />
                        <label htmlFor="name">Nome Completo</label>
                    </article>
                    <article>
                        <input type="text" id="email" name="email" value={formData.email ?? ''} onChange={handleChange} required />
                        <label htmlFor="email">E-mail</label>
                    </article>
                    <article>
                        <input type="password" id="password" name="password" value={formData.password ?? ''} onChange={handleChange} required />
                        <label htmlFor="password">Senha</label>
                    </article>
                    <article>
                        <input type="password" id="confirm-senha" name="confirmPassword" value={formData.confirmPassword ?? ''} onChange={handleChange} required />
                        <label htmlFor="confirm-senha">Confirme a senha</label>
                    </article>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="button" onClick={goToNextStep}>Próxima Etapa</button>
                </section>
            )}
            {currentStep === 2 && (
                <section>
                    <article>
                        <select list="documents" id="documentType" name="docType" value={Object.keys(documentTypeMapping).find(key => documentTypeMapping[key] === formData.docType) || 1} onChange={handleChange} required >
                            <option value="RG">RG</option>
                            <option value="CPF">CPF</option>
                            <option value="CNH">CNH</option>
                            <option value="PASSAPORTE">PASSAPORTE</option>
                            <option value="CRNM">CRNM</option>
                        </select>
                        <label htmlFor="documentType">Tipo de Documento</label>
                    </article>
                    <article>
                        <InputMask mask={currentMask} maskPlaceholder={null} value={formData.document} onChange={handleChange} >
                            {inputProps => (
                                <input {...inputProps} type="text" id="document" name="document" required />
                            )}
                        </InputMask>
                        <label htmlFor="document">Documento</label>
                    </article>
                    <article>
                        <input type="date" id="birthDate" name="birthDate" value={formData.birthDate ?? ''} onChange={handleChange} required />
                        <label htmlFor="birthDate" className={styles.birthDate}>Data de Nascimento</label>
                    </article>
                    <button type="button" onClick={goToNextStep}>Próxima Etapa</button>
                </section>
            )}
            {currentStep === 3 && (
                <section>
                    <article className={styles.rowInputs}>
                        <article className={styles.cepInput}>
                            <InputMask mask={cepMask} maskPlaceholder={null} value={formData.addressDTO.postalCode ?? ''} onChange={handleChange} onBlur={handleCepBlur}>
                                {inputProps => (
                                    <input {...inputProps} type="text" id="postalCode" name="addressDTO.postalCode" required />
                                )}
                            </InputMask>
                            <label htmlFor="postalCode">CEP</label>
                            {loadingCep && <p>Buscando endereço...</p>}
                        </article>
                        <article className={styles.numberInput}>
                            <input type="number" id="number" name="addressDTO.number" value={formData.addressDTO.number ?? ''} onChange={handleChange} required />
                            <label htmlFor="number">Número</label>
                        </article>
                    </article>
                    <article>
                        <input type="text" id="address" name="addressDTO.address" value={formData.addressDTO.address ?? ''} onChange={handleChange} required />
                        <label htmlFor="address">Logradouro</label>
                    </article>
                    <article>
                        <input type="text" id="neighborhood" name="addressDTO.neighborhood" value={formData.addressDTO.neighborhood ?? ''} onChange={handleChange} required />
                        <label htmlFor="neighborhood">Bairro</label>
                    </article>
                        <article className={styles.cityInput}>
                            <input type="text" id="city" name="addressDTO.city" value={formData.addressDTO.city ?? ''} onChange={handleChange} required />
                            <label htmlFor="city">Cidade</label>
                        </article>
                        <article>
                            <select list="states" id="state" name="addressDTO.state" value={formData.addressDTO.state ?? 'SP'} onChange={handleChange} required>
                                <option key="" value="" disabled>Selecione um estado</option>
                                {Object.entries(estadosMap).map(([sigla, nome]) => (
                                    <option key={sigla} value={sigla}>{nome}</option>
                                )
                                )}
                            </select>
                            <label htmlFor="state">Estado</label>
                        </article>
                    <article>
                        <input type="text" id="complement" name="addressDTO.complement" value={formData.addressDTO.complement ?? ''} onChange={handleChange} />
                        <label htmlFor="complement">Complemento</label>
                    </article>
                    <p>Ao criar uma conta, você concorda com nossos <Link to="/politica-privacidade">Termos, Política de Privacidade e Política de Cookies.</Link></p>

                    <button type="submit">Criar Conta</button>
                </section>
            )}
        </form>
    )
}

export default RegisterForm;