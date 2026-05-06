import styles from './Sidebar.module.css'

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h2>Меню</h2>
            <nav>
                <ul>
                    <li><a href="#">🏠 Главная</a></li>
                    <li><a href="/Chat">💬 Чаты</a></li>
                    <li><a href="/Bio">👤 Профиль</a></li>
                    <li><a href="#">⚙️ Настройки</a></li>
                </ul>
            </nav>
        </div>
    )
}
