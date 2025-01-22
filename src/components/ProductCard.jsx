import { ShoppingCart, Trash2} from 'lucide-react';
import useProductStore from '../store/product-store';

function ProductCard({ product }) {
    const actionAddToCart = useProductStore((state) => state.actionAddToCart)
    const actionRemoveProduct = useProductStore((state) => state.actionRemoveProduct)
    return (
        <div className="bg-slate-100 m-2 p-2 rounded-md shadow-md flex flex-col justify-center w-[300px] h-[400px] text-center gap-5">
            <div className='flex flex-col gap-3'>
                <img src={product.images[0]} className="w-[280px] h-[150px] object-cover" />
                <p className="text-sm font-semibold">{product.title}</p>
                <p className="text-sm">{product.description}</p>
            </div>
            <div className="flex justify-between bg-cyan-900 text-white ">
                {/* <h5>{product.category}</h5> */}
                <p className="text-sm">Price : {product.price}</p>
                <div className='flex gap-3'>
                    <button><Trash2 onClick={() => actionRemoveProduct(product.id)} color='red'/></button>
                    <button><ShoppingCart
                        color='white'
                        onClick={() => actionAddToCart(product)} /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
