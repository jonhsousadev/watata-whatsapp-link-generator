interface InputBaseProps {
  label: string
  type?: string
  value: any
  inputChange: (value: any) => void 
}

export default function InputBase(props: InputBaseProps) {
  return (
    <div className="flex w-3/4 flex-col m-2">
      <label className="font-extrabold">{props.label}</label>
      <input className="border border-gray-500 hover:outline-none focus:outline-none bg-gray-100 hover:bg-white focus:bg-white px-4 py-2 rounded-md" 
      type={props.type ?? 'text'} value={props.value} onChange={e => props.inputChange(e.target.value)}/>
    </div>
  )
}