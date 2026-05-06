import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Chat } from "../componentsweb/Chat/Chat"
import { Sidebar } from "../componentsweb/Sidebar/Sidebar"
import './App.css'



export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <div style={{ marginLeft: '250px', display: 'flex', flex: 1 }}></div>
        <div>
          <Routes>
            <Route path="chat" element={<Chat />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  )
}