import { useState } from "react"

function RecapUserState() {
    const num = 6
    const [number, setNumber] = useState(4)
    const [number2, setNumber2] = useState({num : 5})
    console.log(number)
    console.log(number2.num)

    const hdlIncrease = () => {
        console.log('Easy, useState')
        setNumber((prv) => prv + 1)
    }

    const hdlDecrease = () => {
        setNumber((prv) => prv - 1)
    }

    const hdlIncrease2 = () => {
        setNumber2((prv) => ({num : prv.num + 1}))
    }

    const hdlDecrease2 = () => {
        setNumber2((prv) => ({num : prv.num - 1}))
    }

    const hdlMulti = () => {
        setNumber2((prv) => ({num : prv.num * 2}))
    }

    const hdlMod = () => {
        setNumber2((prv) => ({num : prv.num / 2}))
    }

  return (
    <div>
      <h1 className="text-8xl">{number}</h1>
      <br />
      <button className="bg-teal-500 p-2 hover:scale-105 hover:duration-500 rounded-md shadow-md" onClick={hdlIncrease}>Increase</button>
      <button className="bg-teal-500 p-2 hover:scale-105 hover:duration-500 rounded-md shadow-md" onClick={hdlDecrease}>Decrease</button>
      <hr />
      <p className="text-8xl">{number2.num}</p>
      <button className="bg-teal-500 p-2 hover:scale-105 hover:duration-500 rounded-md shadow-md" onClick={hdlIncrease2}>Increase</button>
      <button className="bg-teal-500 p-2 hover:scale-105 hover:duration-500 rounded-md shadow-md" onClick={hdlDecrease2}>Decrease</button>
      <button className="bg-teal-500 p-2 hover:scale-105 hover:duration-500 rounded-md shadow-md" onClick={hdlMulti}>x</button>
      <button className="bg-teal-500 p-2 hover:scale-105 hover:duration-500 rounded-md shadow-md" onClick={hdlMod}>%</button>
    </div>
  )
}

export default RecapUserState
