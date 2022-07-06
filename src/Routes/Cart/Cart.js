// import React from 'react'
// import "./Cart.css"
// import {useStateValue} from "../../context/stateprovider/StateProvider"

// const Cart = () => {
//     const [state, dispatch] = useStateValue();

//     let total = state.cart.reduce((a,b)=>a + (b.price.finalPrice * b.miqdor), 0 )
//       let indexProduct = state.cart.findIndex(i => i.mainId === product.mainId)

//         let newCarts = state.cart.map((cartProduct, index)=>{
//             if(index===indexProduct){
//               return {
//                 ...cartProduct,
//                 miqdor: cartProduct.miqdor + 1
//               }
//             }
//             else{
//               return cartProduct
//             }
//           })
//           dispatch({type: "ADD_PRODUCT", payload: newCarts})
//     }

//     const dic =(product)=> {
//         let indexProduct = state.cart.findIndex(i => i.mainId === product.mainId)

//         let newCarts = state.cart.map((cartProduct, index)=>{
//             if(index===indexProduct){
//                 if(cartProduct.miqdor ===0){
//                     return cartProduct
//                 }else{
//                     return {
//                         ...cartProduct,
//                         miqdor: cartProduct.miqdor - 1
//                       }
//                 }
             
//             }
//             else{
//               return cartProduct
//             }
//           })
//           dispatch({type: "ADD_PRODUCT", payload: newCarts})
//     }

//     const deleteProduct=(id)=>{
//         let indexProduct = state.cart.findIndex( i => i.mainId === id)
//         let newCart = [...state.cart.slice(0, indexProduct), ...state.cart.slice( indexProduct + 1)]
//         dispatch({type: "ADD_PRODUCT", payload: newCart})
        
//     }

//  return (
//      <div className='cart'>
//         {
//           state.cart.length
//           && 
//           state.cart.map(item => (
//             <div key={item.mainId} className="cart_item">
//               <img src={item.displayAssets[0].full_background} alt="" />
//               <h3>{item.displayName}</h3>
//               <div className="counter"> 
//                 <button onClick={()=> dic(item)}>-</button>
//                 <h3>{item.miqdor}</h3>
//                 <button onClick={()=>inc(item)}>+</button>
//               </div>
//               <h3>{item.price.finalPrice} $</h3>
//               <h3>Summa: {item.price.finalPrice * item.miqdor} $</h3>
//               <h3 onClick={()=> deleteProduct(item.mainId)}>X</h3>
//             </div>
//           ))
//         }
//         <h2>Total price: {total}</h2>
//     </div>
    
//   )
  


// export default Cart