import { cn } from "../../utils/cn"

export const Title = ({content, className}) => {
    return <h1 className={cn("uppercase font-bold", className)}>
        {content}
    </h1>
}
