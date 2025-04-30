import "../../package.json"
import styles from "./AboutApp.module.css"
function AboutApp() {
    return (
        <div className={styles.container}>
            <h2>Sobre o Aplicativo</h2>
            <div className={styles.info}>
                <p>Versão do App: <strong>1.0.0</strong></p>
                <p>Desenvolvido por:
                    <ul>
                        <li>
                            Murilo Goivino Tegani
                        </li>
                        <li>
                            Rafael Pinheiro.
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default AboutApp;