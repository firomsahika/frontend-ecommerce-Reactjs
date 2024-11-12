import {useEffect,useState} from "react"

import CartItem from "./CartItem"
import CartSummary from "./CartSummary"
import api from "../../api"
import useCartData from "../../hooks/useCartData"


const CartPage = ({setNumCartItems}) =>{
  
  const {cartItems, setCartItems, cartTotal, setCartTotal, loading, tax} = useCartData()
  

   if(cartItems.length <1 ){
       return (
        <div className="alert alert-primary my-16 items-center mx-40" role="alert">
          You haven't added any item to your cart!!
        </div>
       )
   }


    return (
        <div className="flex flex-col gap-5 items-center justify-center py-10">
          <h4 className="flex items-center justify-center text-3xl text-green-400 font-bold">Shopping Cart</h4>
           <div className="flex gap-20  items-start justify-center">
           <div className="flex flex-col gap-4">
            {
              cartItems.map(item => <CartItem key={item.id} 
              item={item}
              setCartTotal={setCartTotal} 
              cartItems={cartItems}
              setNumCartItems={setNumCartItems}
              setCartItems={setCartItems}
             
              />)
            }
       
          </div>
          <CartSummary cartTotal={cartTotal} tax={tax}/>
           </div>
        </div>
    )
}

export default CartPage