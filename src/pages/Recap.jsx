function Recap() {
  const obj = {
    firstName : 'Violet',
    lastName : 'Evergradent'
  }
  obj.address = 'TOKYO'
  // console.log(obj.firstName)
  const obj2 = {
    street : '1234',
    zipcode : '5678'
  }

  const mergeObj = {...obj, ...obj2}
  console.log(mergeObj)

  const arr = ['Violet', 'Evergradent']
  arr[2] = 'BKK'
  const arr2 = ['1234', '5678']
  const mergeArr = [...arr, ...arr2]
  console.log(mergeArr)

  const products = [
    {id : 1, title : 'ASUS', price : 40000},
    {id : 2, title : 'MIS' , price : 59000}
  ]
  console.log(products[1].title)

  const newProduct = {id : 3, title : "LENOVO", price : 20000}
  const mergeObjArr = [...products, {...newProduct}]
  const mergeObjArr1 = [...products, newProduct]
  console.log(mergeObjArr)
  console.log(mergeObjArr1)

  return (
    <div>
      <div>Easy, Zustand</div>
    </div>
  )
}

export default Recap