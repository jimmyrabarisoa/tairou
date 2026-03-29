
const Progressbar = ({progress}) => {
  return (
    <div
      className="w-full h-2 bg-primary/10 rounded-full"
    >
      <div
        className="h-2 bg-primary rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default Progressbar
