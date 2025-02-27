import EditUserForm from '../components/forms/EditUserForm';
import styles from './EditProfile.module.css'

function EditProfile() {
    return (
        <>
            <section className={styles.form}>
                <EditUserForm />
            </section>
        </>
    )
}

export default EditProfile;