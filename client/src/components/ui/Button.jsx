import { cn } from "../../utils/cn"

const variants = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary/10",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white",
  outline: ""
}

const Button = ({icon: Icon, type = "button", content = "", variant, className, ...props}) => {
  return (
    <button 
        type={type}
        className={cn("flex justify-center items-center font-mono gap-2 rounded-2xl p-3 cursor-pointer", variants[variant], className)} 
        {...props}>
      { Icon && <Icon size={18} />}
      { content !== "" && <span>{content}</span>}
    </button>
  )
}

export default Button