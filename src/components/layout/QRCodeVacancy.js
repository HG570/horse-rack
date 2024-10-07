import styles from './QRCodeVacancy.module.css';
import { useEffect, useState } from 'react';
import { getUserProfile } from '../../services/Profile';
import { HiOutlineXMark } from 'react-icons/hi2';
import QRCodeGenerator from '../utils/QRCodeGenerator';

export default function QRCodeVacancy({ isOpen, onClose }) {
    const [profile, setProfile] = useState(null);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userProfile = await getUserProfile(userId);
                if (userProfile) {
                    setProfile(userProfile);
                } else {
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        if (userId) {
            fetchProfile();
        } else {
        }
    }, [userId]);

    if (isOpen && profile) {
        return (
            <section className={styles.background} onClick={onClose}>
                <section className={styles.qrcodeCard}>
                    <article className={styles.card}>
                        <h3>QR Code</h3>
                        <button onClick={onClose}>
                            <HiOutlineXMark />
                        </button>
                    </article>
                    <article className={styles.data}>
                        <article className={styles.qrcodeUserName}>
                            <p>{profile.name}</p>
                        </article>
                        <QRCodeGenerator value={profile.document} />
                        <ul>
                            <li>Documento: {profile.document}</li>
                            <li>Data de Nascimento: {new Date(`${profile.birthDate}T00:00:00`).toLocaleDateString()}</li>
                        </ul>
                    </article>
                </section>
            </section>
        );
    } else if (isOpen && !profile) {
    }
    return null;
}
