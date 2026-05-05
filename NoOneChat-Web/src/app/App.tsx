import { Chat } from "../componentsweb/Chat/Chat"    
import { Sidebar } from "../componentsweb/Sidebar/Sidebar"
import '/src/App.css'

 

export const App = () => {
    return (
        <div>
            <h1>No One Chat</h1>
            <Sidebar />    
            <div style={{ marginLeft: '250px', display: 'flex', flex: 1 }}></div>       
            <Chat />
        </div>
    )
}
