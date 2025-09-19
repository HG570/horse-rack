import EditUserForm from '../components/forms/EditUserForm';
import styles from './EditProfile.module.css'

function EditProfile({ step, setStep }) {
    return (
        <>
            <section className={styles.form}>
                <h1> Atualizar Dados da Conta </h1>
                <EditUserForm currentStep={step} setCurrentStep={setStep}/>
            </section>
        </>
    )
}

export default EditProfile;