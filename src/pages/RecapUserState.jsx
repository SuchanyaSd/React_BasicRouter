import { useState } from "react"

function RecapUserState() {
    const num = 5
    const [number, setNumber] = useState(4)
    console.log(number)

    const hdlIncrease = () => {
        console.log('Easy, useState')
    }

  return (
    <div>
      <h1 className="text-8xl">{number}</h1>
      <br />
      <button className="bg-teal-500 p-2 hover:scale-105 hover:duration-500 rounded-md shadow-md">Increase</button>
    </div>
  )
}

export default RecapUserState
