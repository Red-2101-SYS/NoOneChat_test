import styles from './Bio.module.css'

export const Bio = () => {
    return (
        <div className={styles.bio}>
            <div className={styles.avatar}>
                <div className={styles.avatarImg}>
                    👤
                </div>
            </div>
            <div className={styles.name}>
                Иван Иванов
            </div>
            <div className={styles.role}>
                Разработчик
            </div>
            <div className={styles.info}>
                <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>📧</span>
                    <span className={styles.infoText}>ivan@example.com</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>📍</span>
                    <span className={styles.infoText}>Москва, Россия</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.status}></span>
                    <span className={styles.infoText}>Онлайн</span>
                </div>
            </div>
        </div>
    )
}