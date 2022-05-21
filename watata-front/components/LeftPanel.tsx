interface LeftPanelProps {

}

export default function LeftPanel(props: LeftPanelProps) {
  return (
    <div className={`
      flex justify-center items-center
      bg-gradient-to-b from-emerald-900 to bg-emerald-700
      h-screen
    `}>
      <div className={`
        flex flex-col text-xl
        text-white text-5xl
      `}>
        The easiest way to make a 
        <span className="font-bold">Whatsapp Link</span>
      </div>
    </div>
  )
}