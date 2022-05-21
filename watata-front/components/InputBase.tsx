interface InputBaseProps {
  label: string
  type?: string
  value: any
  inputChange: (value: any) => void 
}

export default function InputBase(props: InputBaseProps) {
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type ?? 'text'} value={props.value} onChange={e => props.inputChange(e.target.value)}/>
    </div>
  )
}