import { cn } from "../utils/cn"

const variantBgStyles = {
  primary: "bg-primary/10",
  success: "bg-success/10",
  warning: "bg-warning/10",
}

const variantTxtStyles = {
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning",
}

const Stats = ({icon: Icon, parameter = "", value = 0, variant}) => {

  const bgStyle = variantBgStyles[variant]
  const txtStyle = variantTxtStyles[variant]

  return (
    <div className={cn("flex items-center gap-2 px-4 py-1 rounded-2xl", bgStyle)}>
        <Icon size={18} className={txtStyle} />
        <span className={cn("font-mono font-bold", txtStyle)}>{value}</span>
        <span className="text-sm font-mono">{parameter}</span>
    </div>
  )
}

export default Stats
