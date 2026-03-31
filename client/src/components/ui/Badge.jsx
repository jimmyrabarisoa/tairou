import { cn } from "../../utils/cn"

const variants = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary/10",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white",
}

const Badge = ({icon: Icon, content = "", variant, className, ...props}) => {
  return (
    <div 
        className={cn("flex items-center text-xs font-mono gap-2 rounded-2xl px-4 py-1 w-fit", variants[variant], className)} 
        {...props}
    >
        { Icon && <Icon size={12} />}
        <span>{content}</span>
    </div>
  )
}

export default Badge