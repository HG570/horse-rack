import EditUserForm from '../components/forms/EditUserForm';
import styles from './EditProfile.module.css'

function EditProfile() {
    return (
        <>
            <section className={styles.form}>
                <h1> Atualizar Dados da Conta </h1>
                <EditUserForm />
            </section>
        </>
    )
}

export default EditProfile;