import { HiEnvelope } from "react-icons/hi2";
import styles from "./Notifications.module.css"
function Notifications() {
    return (
        <div className={styles.notFound}>
            <HiEnvelope/>
            <p>Não há novas notificações</p>
        </div>
    )
}
export default Notifications