import { useState } from 'react'
import styles from './RegisterForm.module.css';
import { signUp } from '../../services/User';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: null,
        docType: null,
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

    const documentTypeMapping = {
        "RG": 1,
        "CPF": 2,
        "CNH": 3,
        "PASSAPORTE": 4,
        "CRNM": 5
    };

    const [error, setError] = useState(null);
    
    const [currentStep, setCurrentStep] = useState(1);

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

    const handleSubmit = async (event) => {
        try {
            await signUp(formData);
            alert('Cadastro realizado com sucesso!');
            // Redirecionar ou limpar o formulário após o sucesso
        } catch (error) {
            setError('Falha ao realizar o cadastro. Tente novamente.');
            event.preventDefault();
        }
    };

    const goToNextStep = () => {
        setError(null)
        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        } else if (formData.name === null && formData.email === null && formData.password === null) {
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
                    <article>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                        <label htmlFor="password">Senha</label>
                    </article>
                    <article>
                        <input type="password" id="confirm-senha" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                        <label htmlFor="confirm-senha">Confirme a senha</label>
                    </article>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="button" onClick={goToNextStep}>Próxima Etapa</button>
                </section>
            )}
            {currentStep === 2 && (
                <section>
                    <article>
                        <select list="documents" id="documentType" name="docType" value={Object.keys(documentTypeMapping).find(key => documentTypeMapping[key] === formData.docType) || ''}  onChange={handleChange} required >

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
                        <input type="text" id="postalCode" name="addressDTO.postalCode" value={formData.addressDTO.postalCode} onChange={handleChange} required />
                        <label htmlFor="postalCode">CEP</label>
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
                        <input type="text" id="state" name="addressDTO.state" value={formData.addressDTO.state} onChange={handleChange} required />
                        <label htmlFor="state">Estado</label>
                    </article>
                    <p>Ao criar uma conta, você concorda com nossos Termos, Política de Privacidade e Política de Cookies.</p>
                    
                    <button onClick={() => {handleSubmit(); navigate('/signin');}}>Criar Conta</button>
                </section>
            )}
        </form>
    )
}

export default RegisterForm;