import styles from './QRCodeVacancy.module.css';
import { useEffect, useState } from 'react';
import { getUser } from '../../services/User';
import { HiOutlineXMark } from 'react-icons/hi2';
import QRCodeGenerator from '../utils/QRCodeGenerator';
import Loading from '../common/loading/Loading'

export default function QRCodeVacancy({ isOpen, bicycles, onClose }) {
    const [profile, setProfile] = useState(null);
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userProfile = await getUser(userId);
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

    const handleSelectBicycle = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep(2);
        }, 400);
    };

    if (isOpen && profile) {
        return (
            <section className={styles.background}>
                <section className={styles.qrcodeCard} style={{ backgroundColor: step === 2 ? 'var(--white)' : 'var(--background-color)'}}>
                    {step === 1 && !isLoading && (
                        <>
                            <article className={styles.card}>
                                <h3>Escolha a bicicleta</h3>
                                <button onClick={onClose}>
                                    <HiOutlineXMark />
                                </button>
                            </article>
                            <article className={styles.data}>
                                {!bicycles ? (
                                    <p>Não foram encontradas bicicletas cadastradas.</p>
                                ) : bicycles.map(bicycle => (
                                    <button key={bicycle.bicycleId} onClick={handleSelectBicycle} className={styles.bikeButton} style={{ backgroundColor: `var(--bike-${bicycle.color})`, color: ['white', 'yellow'].includes(bicycle.color) ? 'var(--dark-gray)' : 'var(--white)' }}>
                                            {bicycle.model}
                                    </button>
                                ))}
                            </article>
                        </>
                    )}
                    {isLoading && (
                        <article className={styles.loadingCard}>
                            <Loading />
                        </article>
                    )}
                    {step === 2 && (
                        <>
                            <article className={styles.card}>
                                <h3>QR Code</h3>
                                <button onClick={() => { onClose(); setStep(prevStep => prevStep - 1); }}>
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
                        </>
                    )}
                </section>
            </section>
        );
    } else if (isOpen && !profile) {
    }
    return null;
}
