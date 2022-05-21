interface ButtonBaseProps {
  text: string
  buttonClick: () => void
}

export default function ButtonBase(props: ButtonBaseProps) {
  return (
    <button
     className={`flex justify-center items-center bg-gradient-to-r from-green-800 to-green-900 font-bold px-4 py-2 m-5 rounded-lg text-white w-3/4`} 
     onClick={props.buttonClick}>{props.text}</button>
  )
}