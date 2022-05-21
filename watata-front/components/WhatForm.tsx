import { useState } from "react"
import ButtonBase from "./ButtonBase"
import InputBase from "./InputBase"

interface WhatFormProps {
  className?: string
}

export default function WhatForm(props: WhatFormProps) {
  const [phone, setPhone]  = useState('')
  const [message,setMessage] = useState('')
  const [link, setLink] = useState('')

  function generateLink() {
    let paramsText = (phone ? 'phone='+phone : '') + (message ? '&text='+message : '')
    if(phone !== '') setLink(`https://api.whatsapp.com/send?${paramsText}`)
  }

  return (
    <div className={`flex flex-col h-screen justify-center items-center ${props.className}`}>
      <h2 className="font-thin text-4xl w-3/4 mb-12">Insert your data and click on the button to generate your custom <span className="font-bold">Whatsapp link</span>:</h2>
      <InputBase label="Insert your phone here:" value={phone} inputChange={setPhone}></InputBase>
      <InputBase label="and your message here:" value={message} inputChange={setMessage}></InputBase>
      <ButtonBase text="Generate Link" buttonClick={generateLink} />
      { link && phone ? (
        <div className="flex justify-start items-center mt-4 font-thin text-2xl">
          <a className="font-bold text-green-800 mr-1" href={link}>Click here</a> to access your link! 
        </div>
      ): false}
    </div>
  )
}