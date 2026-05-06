import { Outlet } from "react-router-dom"
import { Sidebar } from "../componentsweb/Sidebar/Sidebar"
import './App.css'



export const App = () => {
  return (
      <div>
        <Sidebar />
        <div style={{ marginLeft: '250px', display: 'flex', flex: 1 }}></div>
        <div>
          <Outlet />
        </div>
      </div>
  )
}