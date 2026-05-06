import { useState } from 'react'
import styles from './Chat.module.css'


export const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Привет!', sent: false, time: '10:00' },
        { id: 2, text: 'Здравствуйте! Как дела?', sent: true, time: '10:01' },
        { id: 3, text: 'Отлично, спасибо!', sent: false, time: '10:02' },
    ])
    const [inputText, setInputText] = useState('')

    const sendMessage = () => {
        if (inputText.trim()) {
            const newMessage = {
                id: messages.length + 1,
                text: inputText,
                sent: true,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
            setMessages([...messages, newMessage])
            setInputText('')
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            sendMessage()
        }
    }
    return (
        <div className={styles.chat}>
            <div className={styles.header}>
                <h3>Чат</h3>
            </div>
            <div className={styles.messages}>
                {messages.map((msg) => (
                    <div key={msg.id} className={`${styles.message} ${msg.sent ? styles.messageSent : styles.messageReceived}`}>
                        <div className={styles.messageBubble}>
                            <p className={styles.messageText}>{msg.text}</p>
                            <div className={styles.messageTime}>{msg.time}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.inputArea}>
                <input
                    type="text"
                    className={styles.inputField}
                    placeholder="Введите сообщение..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button className={styles.sendButton} onClick={sendMessage}>
                    Отправить
                </button>
            </div>
        </div>
    
    )
}