import axios from "axios"
import { create } from "zustand"
import { persist } from "zustand/middleware"


const productStore = (set) => ({
    products : [],
    cart : [],
    actionGetData :  async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products')
            // console.log(res.data.products)
            set({products : res.data.products})
        } catch (error) {
            console.log(error.message)
        }
        
    },
    actionAddToCart: (product) => {
        // console.log(product);
        set((state)=>({cart:[...state.cart,product]}))
    },
    actionClear : () => {
        set({cart : []})
    }
})

const useProductStore = create(persist(productStore,{name : 'product-store'}))

export default useProductStore
