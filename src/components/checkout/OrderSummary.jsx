import React from 'react'
import OrderItem from './OrderItem'
import PaymentOptions from './PaymentOptions'

const OrderSummary = ({cartItems, cartTotal, tax}) => {
  const total = (cartTotal + tax).toFixed(2);
  return (
    <div className='w-full max-w-lg flex'>
       <div className='flex flex-col gap-2 '>
        <h4 className='w-full p-2 bg-yellow-400 text-slate-800 font-semibold'>Cart Summary</h4>
        <div className='flex flex-col gap-y-5 border-b'>
         {
            cartItems.map(cartItem => <OrderItem key={cartItem.id} cartItem={cartItem}/> )
         }
     
        </div>

        <div className='flex items-center justify-between '>
        <p>Total</p>
        <strong>{`$${total}`}</strong>
      </div>
       </div>
      
    </div>
  )
}

export default OrderSummary
