import { Trash2, Play, CalendarClock } from "lucide-react"
import { Title } from "./ui/Heading"
import Button from "./ui/Button"
import Badge from "./ui/Badge"
import { useState, useEffect } from "react"
import axios from "axios"

const IdeaList = () => {

  const [ideas, setIdeas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get("https://localhost:7089/api/ideas")
    .then(res => setIdeas(res.data))
    .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="flex flex-col gap-2">
      <Title content="Tes idées" />
      <div className="flex flex-col gap-2">
        { isLoading ? <p>Chargement...</p> :
          ideas.map(idea => (
            <div 
              key={idea.id}
              className="container flex justify-between items-center border border-secondary/10 shadow-xs"
            >
              <div>
                <div className="text-sm font-mono">{idea.title}</div>
                { idea.dueDate && <Badge icon={CalendarClock} content={idea.dueDate} variant="secondary" /> }
              </div>
              <div className="flex gap-4">
                <Button icon={Trash2} variant="error" />
                <Button icon={Play} variant="primary" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default IdeaList
