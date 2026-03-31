import Navbar from "../components/Navbar"
import { Outlet } from "react-router"

function App() {

  return (
    <div className="flex flex-col mx-auto min-h-dvh max-w-200 p-5">
      {/* <Topbar /> */}
      <div className="flex-1">
        <Outlet />  
      </div>   
      <Navbar />
    </div>
  )
}

export default App
