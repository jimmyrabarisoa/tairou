import { cn } from "../../utils/cn"

const Input = ({type = "text", name, icon: Icon, className, ...props}) => {
  const base = "border border-secondary/10 outline-primary shadow-xs rounded-xl py-2"
  const withIcon = Icon ? "pl-10 pr-4" : "px-4"

  return (
    Icon 
    ? <div className="relative">
      <input
        type={type}
        name={name}
        className={cn(base, withIcon, className)}
        {...props}
      />
      <Icon size={18} className="absolute left-6 top-1/2 -translate-1/2" />
    </div>
    : <>
        <input
          type={type}
          name={name}
          className={cn(base, withIcon, className)}
          {...props}
        />
    </>
  )
}

export default Input
