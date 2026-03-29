import { Globe, LogOut, Star, Flame, Trophy, Zap } from 'lucide-react'
import Progressbar from './Progressbar'
import Stats from "./Stats"

const Topbar = () => {
  return (
    <div className="container flex flex-col gap-1 bg-white border border-border shadow-xs p-4 rounded-2xl">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Tairou</h2>
          <div className="flex items-center gap-2">       
            <button className="flex items-center gap-1 p-2 cursor-pointer hover:bg-secondary/10 hover:rounded-2xl">
                <Globe size={18} />
                <span className="text-xs">FR</span>
            </button>
            <div className="text-xs text-white font-extrabold px-3 py-2 rounded-full bg-primary">
                J
            </div>
            <button className="p-2 cursor-pointer hover:bg-secondary/10 hover:rounded-2xl">
                <LogOut size={18} />
            </button>
          </div>
        </div>
        <div className="flex items-center flex-wrap sm:flex-nowrap gap-4">
            <Stats icon={Star} parameter="Lancé" value="Nv.2" variant="primary" />
            <div className="flex items-center gap-2 px-4 py-1 w-full">
                <Zap size={18} className="text-warning shrink-0" />
                <Progressbar progress={25} />
                <span className="text-sm font-mono">{25}</span>
                <span className="text-sm font-mono">XP</span>
            </div>
            <Stats icon={Flame} parameter="jour(s)" value={0} variant="warning" />
            <Stats icon={Trophy} value={0} variant="success" />
        </div>
    </div>
  )
}

export default Topbar
