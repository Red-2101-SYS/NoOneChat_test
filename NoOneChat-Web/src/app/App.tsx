import { FormEvent, useState } from "react"
import "./App.css"

type Message = {
  id: number
  text: string
  time: string
  isOwn: boolean
}

type Chat = {
  id: number
  name: string
  avatar: string
  status: string
  messages: Message[]
}

const initialChats: Chat[] = [
  {
    id: 1,
    name: "Анна",
    avatar: "А",
    status: "была онлайн недавно",
    messages: [
      { id: 1, text: "Привет!", time: "10:00", isOwn: false },
      { id: 2, text: "Здравствуйте! Как дела?", time: "10:01", isOwn: true },
      { id: 3, text: "Отлично, спасибо!", time: "10:02", isOwn: false },
    ],
  },
  {
    id: 2,
    name: "Команда проекта",
    avatar: "К",
    status: "3 участника",
    messages: [
      { id: 1, text: "Давайте сначала соберём frontend-макет.", time: "11:20", isOwn: false },
      { id: 2, text: "Согласен, потом подключим backend.", time: "11:22", isOwn: true },
    ],
  },
  {
    id: 3,
    name: "Тестовый чат",
    avatar: "Т",
    status: "локальный прототип",
    messages: [
      { id: 1, text: "Это тестовая переписка.", time: "12:05", isOwn: false },
    ],
  },
]

const menuItems = ["Главная", "Чаты", "Профиль", "Настройки", "Контакты"]

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState("Чаты")
  const [chats, setChats] = useState<Chat[]>(initialChats)
  const [activeChatId, setActiveChatId] = useState(initialChats[0].id)
  const [messageText, setMessageText] = useState("")

  const activeChat = chats.find((chat) => chat.id === activeChatId)

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedText = messageText.trim()

    if (!trimmedText || !activeChat) {
      return
    }

    const newMessage: Message = {
      id: Date.now(),
      text: trimmedText,
      time: getCurrentTime(),
      isOwn: true,
    }

    setChats((currentChats) =>
      currentChats.map((chat) =>
        chat.id === activeChat.id
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      )
    )

    setMessageText("")
  }

  return (
    <div className="app">
      <header className="app-header">
        <button
          className="app-brand"
          type="button"
          onClick={() => setActiveMenuItem("Главная")}
        >
          <div className="app-logo">N</div>
          <span>NoOneChat</span>
        </button>

        <button
          className="menu-button"
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <span className="menu-button-line"></span>
          <span className="menu-button-line"></span>
          <span className="menu-button-line"></span>
        </button>
      </header>

      {isMenuOpen && (
        <nav className="dropdown-menu">
          {menuItems.map((item) => (
            <button
              key={item}
              className={
                activeMenuItem === item
                  ? "dropdown-menu-item active"
                  : "dropdown-menu-item"
              }
              type="button"
              onClick={() => {
                setActiveMenuItem(item)
                setIsMenuOpen(false)
              }}
            >
              {item}
            </button>
          ))}
        </nav>
      )}

      <main className="messenger-layout">
        <aside className="chat-list-panel">
          <div className="chat-list-header">
            <div>
              <h1>Чаты</h1>
              <p>Локальный frontend-прототип</p>
            </div>
            <button className="new-chat-button" type="button">
              +
            </button>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Поиск чатов..." />
          </div>

          <div className="chat-list">
            {chats.map((chat) => {
              const lastMessage = chat.messages[chat.messages.length - 1]

              return (
                <button
                  key={chat.id}
                  className={
                    activeChatId === chat.id ? "chat-item active" : "chat-item"
                  }
                  type="button"
                  onClick={() => setActiveChatId(chat.id)}
                >
                  <div className="chat-avatar">{chat.avatar}</div>

                  <div className="chat-preview">
                    <div className="chat-preview-top">
                      <span className="chat-name">{chat.name}</span>
                      <span className="chat-time">{lastMessage?.time}</span>
                    </div>

                    <p>{lastMessage?.text}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </aside>

        <section className="chat-window">
          {activeChat && (
            <>
              <div className="chat-window-header">
                <div className="chat-avatar large">{activeChat.avatar}</div>

                <div>
                  <h2>{activeChat.name}</h2>
                  <p>{activeChat.status}</p>
                </div>
              </div>

              <div className="messages-area">
                {activeChat.messages.map((message) => (
                  <div
                    key={message.id}
                    className={
                      message.isOwn
                        ? "message-row own"
                        : "message-row incoming"
                    }
                  >
                    <div className="message-bubble">
                      <p>{message.text}</p>
                      <span>{message.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <form className="message-form" onSubmit={sendMessage}>
                <input
                  value={messageText}
                  onChange={(event) => setMessageText(event.target.value)}
                  type="text"
                  placeholder="Введите сообщение..."
                />

                <button type="submit">Отправить</button>
              </form>
            </>
          )}
        </section>
      </main>
    </div>
  )
}