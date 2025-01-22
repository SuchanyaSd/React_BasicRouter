import { ShoppingCart } from 'lucide-react';
import useProductStore from '../store/product-store';

function ProductCard({product}) {
    const actionAddToCart = useProductStore((state) => state.actionAddToCart)
  return (
    <div className="bg-slate-100 m-2 p-2 rounded-md shadow-md flex flex-col justify-center w-[300px] h-[400px] text-center gap-5">
      <div className='flex flex-col gap-3'>
        <img src={product.images[0]}  className="w-[280px] h-[150px] object-cover"/>
        <p className="text-sm font-semibold">{product.title}</p>
        <p className="text-sm">{product.description}</p>
      </div>
      <div className="flex justify-between bg-cyan-900 text-white ">
        {/* <h5>{product.category}</h5> */}
        <p className="text-sm">Price : {product.price}</p>
        <p><ShoppingCart
        color='white'
        onClick={()=>actionAddToCart(product)}/></p>
      </div>
    </div>
  )
}

export default ProductCard
