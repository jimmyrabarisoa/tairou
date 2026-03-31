import { Trash2, Play, CalendarClock } from "lucide-react"
import { Title } from "./ui/Heading"
import Button from "./ui/Button"
import Badge from "./ui/Badge"

const projects = [
    {
        ideaName: "Faire un jeu vidéo"
    },
    {
        ideaName: "Fabriquer une table de nuit"
    },
    {
        ideaName: "Réarranger le jardin"
    },
    {
        ideaName: "Elever des canards"
    },
]

const IdeaList = () => {
  return (
    <div className="flex flex-col gap-2">
      <Title content="Tes idées" />
      <div className="flex flex-col gap-2">
        { projects.map((project, index) => (
          <div 
            key={index}
            className="container flex justify-between items-center border border-secondary/10 shadow-xs"
          >
            <div>
              <div className="text-sm font-mono">{project.ideaName}</div>
              <Badge icon={CalendarClock} content="Dans 15 jours" variant="secondary" />
            </div>
            <div className="flex gap-4">
              <Button icon={Trash2} variant="error"/>
              <Button icon={Play} variant="primary" content="Lancer"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IdeaList
