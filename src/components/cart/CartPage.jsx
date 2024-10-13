import {useEffect,useState} from "react"

import CartItem from "./CartItem"
import CartSummary from "./CartSummary"
import api from "../../api"


const CartPage = ({setNumCartItems}) =>{
   const [cartItems, setCartItems] = useState([])
   const [cartTotal, setCartTotal] = useState(0.00)
   const tax = 4
   const cart_code = localStorage.getItem("cart_code")
   
   useEffect(function(){
    api.get(`get_cart?cart_code=${cart_code}`)
    .then (res =>{
      console.log(res.data)
      setCartItems(res.data.items)
      setCartTotal(res.data.sum_total)
    })
    .catch(err =>{
      console.log(err.message)
    })
   },[])

   if(cartItems.length <1 ){
       return (
        <div className="alert alert-primary my-20 items-center mx-40" role="alert">
          You haven't added any item to your cart!!
        </div>
       )
   }


    return (
        <div className="flex flex-col gap-5 items-center justify-center py-32">
          <h4 className="flex items-start text-2xl text-slate-500">Shopping Cart</h4>
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