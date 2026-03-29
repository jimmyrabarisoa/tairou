import { NavLink } from "react-router"
import { Lightbulb, History, Trophy, Palette } from "lucide-react"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 flex justify-evenly items-center px-3 py-3 gap-5 w-full border-t border-border">
      <NavLink to="/" className={({isActive}) => isActive ? (styles.currentNavigation) : (styles.notCurrentNavigation)}>
        <Lightbulb />
        <span className="text-[0.6rem] font-bold">Mes idées</span>
      </NavLink>
      <NavLink to="/history" className={({isActive}) => isActive ? (styles.currentNavigation) : (styles.notCurrentNavigation)}>
        <History />
        <span className="text-[0.6rem] font-bold">Historique</span>
      </NavLink>
      <NavLink to="/trophy" className={({isActive}) => isActive ? (styles.currentNavigation) : (styles.notCurrentNavigation)}>
        <Trophy />
        <span className="text-[0.6rem] font-bold">Trophées</span>
      </NavLink>
      <NavLink to="/themes" className={({isActive}) => isActive ? (styles.currentNavigation) : (styles.notCurrentNavigation)}>
        <Palette />
        <span className="text-[0.6rem] font-bold">Thèmes</span>
      </NavLink>
    </nav>
  )
}

export default Navbar
