import styles from './Sidebar.module.css'

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h2>Меню</h2>
            <nav>
                <ul>
                    <li><a href="../app/App.tsx">🏠 Главная</a></li>
                    <li><a href="#">💬 Чаты</a></li>
                    <li><a href="./Bio.tsx">👤 Профиль</a></li>
                    <li><a href="#">⚙️ Настройки</a></li>
                </ul>
            </nav>
        </div>
    )
}
