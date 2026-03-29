import Navbar from "./components/Navbar"
import { Outlet } from "react-router"

function App() {

  return (
    <div className="flex flex-col px-30 py-2">
      <Navbar />
      <div className="flex-1">
        <Outlet />  
      </div>   
    </div>
  )
}

export default App
