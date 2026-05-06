import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './app/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Chat } from './componentsweb/Chat/Chat'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/*' element={<App />}>
          <Route path='chat' element={<Chat />}/>
        </Route>    
      </Routes>
    </StrictMode>
    </BrowserRouter>
)