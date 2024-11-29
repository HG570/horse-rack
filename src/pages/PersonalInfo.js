import styles from './PersonalInfo.module.css';
import { useEffect, useState } from 'react';
import { getUserProfile } from '../services/Profile';
import { Link } from 'react-router-dom'

function PersonalInfo() {
    const [profile, setProfile] = useState(null);
    const userId = localStorage.getItem('userId');
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userProfile = await getUserProfile(userId);
                setProfile(userProfile);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [userId]);

    if (!profile) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <section className={styles.container}>
                <h2>Informações Pessoais</h2>
                <ul>
                    <li>
                        <h4>Nome</h4>
                        <p>{profile.name}</p>
                    </li>
                    <li>
                        <h4>Email</h4>
                        <p>{profile.email}</p>
                    </li>
                    <li>
                        <h4>Documento</h4>
                        <p>{profile.document}</p>
                    </li>
                    <li>
                        <h4>Data de Nascimento</h4>
                        <p>{new Date(`${profile.birthDate}T00:00:00`).toLocaleDateString()}</p>
                    </li>
                    <li>
                        <h4>Endereço</h4>
                        <p>
                            {profile.addressDTO.address}, {profile.addressDTO.number} - Bairro {profile.addressDTO.neighborhood}, {profile.addressDTO.city} - {profile.addressDTO.state}, {profile.addressDTO.postalCode}
                        </p>
                    </li>
                </ul>

                <Link to="/atualizar-informacoes" className={styles.option}> 
                    <h5>Atualizar Meus Dados</h5>
                </Link>
            </section>
            <section className={styles.politic}>
                Consulte nossa <a href="privacy">Política de Privacidade</a>.
            </section>
        </>
    )
}

export default PersonalInfo