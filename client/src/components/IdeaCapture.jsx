import { Title } from "./ui/Heading"
import Input from "./ui/Input"
import Datepicker from "./ui/Datepicker"
import Button from "./ui/Button"
import { Plus } from "lucide-react"

const IdeaCapture = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        // un objet spécial en js permettant de stocker les valeurs des inputs d'un formulaire
        const formData = new FormData(e.target)

        // permet d'afficher la liste clés-valeurs de FormData
        for(const [key, value] of formData.entries()) {
            console.log(key, value)
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <Title content="Capture ton idée" />
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <Input placeholder="Que veux-tu accomplir ?" name="name" className="w-full" />
                <div className="relative">
                    <Datepicker />
                </div>
                <Button icon={Plus} type="submit" variant="primary" content="Ajouter" className="mx-auto" />
            </form>
        </div>
    )
}

export default IdeaCapture
