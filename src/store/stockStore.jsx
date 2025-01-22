import { create } from "zustand"

// const useStockStore = create((set) => ({
//     firstName : 'Luna',
//     lastName : 'Freya',
//     address : {
//         street : '1234',
//         zipcode : '567'
//     },
//     profiler : ['Violet', 'Evergradent'],
//     products : [
//         {id : 1, title : "ASUS", price : 50000},
//         {id : 2, title : "MSI", price : 40000}
//     ],
//     number : 5,
//     actionIncrease : () => {
//         console.log('Easy!!!')
//         // setNumber2((state) => ({num : state.num + 1}))
//         set((state) => ({number : state.number + 1}))
//     },
//     actionDecrease : () => {
//         set((state) => ({number : Math.max(0, state.number - 1)}))
//     },
//     actionMultiplication : () => {
//         set((state) => ({number : state.number * 2}))
//     },
//     actionDivision : () => {
//         set((state) => ({number : state.number / 2}))
//     }
// }))

const stockStore = (set) => ({
    firstName : 'Luna',
    lastName : 'Freya',
    address : {
        street : '1234',
        zipcode : '567'
    },
    profiler : ['Violet', 'Evergradent'],
    products : [
        {id : 1, title : "ASUS", price : 50000},
        {id : 2, title : "MSI", price : 40000}
    ],
    number : 5,
    actionIncrease : () => {
        console.log('Easy!!!')
        // setNumber2((state) => ({num : state.num + 1}))
        set((state) => ({number : state.number + 1}))
    },
    actionDecrease : () => {
        set((state) => ({number : Math.max(0, state.number - 1)}))
    },
    actionMultiplication : () => {
        set((state) => ({number : state.number * 2}))
    },
    actionDivision : () => {
        set((state) => ({number : state.number / 2}))
    }
})
const useStockStore = create(stockStore)

export default useStockStore
