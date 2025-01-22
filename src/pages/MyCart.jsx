import ProductCard from "../components/ProductCard"
import useProductStore from "../store/product-store"


function MyCart() {
    const cart = useProductStore ((state) => state.cart)
    console.log(cart)
    const actionClear = useProductStore ((state) => state.actionClear)
  return (
    <div>
      {
        cart.map((product) => {
            return <ProductCard key={product.id} product={product}/>
        })
      }
      <button onClick={actionClear}>Clear</button>
    </div>
  )
}

export default MyCart
