import { useEffect } from "react"
import useProductStore from "../store/product-store"
import ProductCard from "../components/ProductCard"

function Product() {
    const products = useProductStore((state) => state.products)
    const actionGetData = useProductStore((state) => state.actionGetData)
    console.log(products)

    useEffect(() => {
        actionGetData()
    }, [])

  return (
    <div>
      <button onClick={actionGetData} className="bg-indigo-500">Get Data</button>
      <hr />

      <div className="flex flex-wrap gap-5">
      {
        products?.map((product) => {
            // console.log(product)
            return <ProductCard key={product.id} product={product}/>
        })
      }
      </div>
      
    </div>
  )
}

export default Product
