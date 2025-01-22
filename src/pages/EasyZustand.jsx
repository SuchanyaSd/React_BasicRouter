import useStockStore from "../store/stockStore"


function EasyZustand() {
    //Step 1 Create Store


    //Step 2 Use store
    const firstName = useStockStore((state) => state.firstName)
    console.log(firstName)
    const lastName = useStockStore((state) => state.lastName)
    console.log(lastName)
    const address = useStockStore((state) => state.address)
    console.log(address)
    const profile = useStockStore((state) => state.profiler)
    console.log(profile)
    const products = useStockStore((state) => state.products)
    console.log(products)
    const number = useStockStore((state) => state.number)
    console.log(number)
    const actionIncrease = useStockStore((state) => state.actionIncrease)
    const actionDecrease = useStockStore ((state) => state.actionDecrease)
    const actionMultiplication = useStockStore ((state) => state.actionMultiplication)
    const actionDivision = useStockStore ((state) => state.actionDivision)
    const hdlClick = () => {
        actionDecrease('Hi')
    }
  return (
    <div>
      {firstName}, {lastName}
      <p>{profile[0]}</p>
      <p>{address.zipcode}</p>
      <p>{products[1].title} price : {products[1].price}</p>
      <p className="text-8xl">{number}</p>
      <button onClick={actionIncrease} className="bg-teal-300 m-1">Increase</button>
      <button onClick={actionDecrease} className="bg-teal-300 m-1">Decrease</button>
      <button onClick={actionMultiplication} className="bg-teal-300 m-1">Multi</button>
      <button onClick={actionDivision} className="bg-teal-300 m-1">Divi</button>
    </div>
  )
}

export default EasyZustand
