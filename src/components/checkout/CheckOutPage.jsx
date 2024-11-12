import React from 'react'
import OrderSummary from './OrderSummary'
import PaymentOptions from './PaymentOptions'
import useCartData from '@/hooks/useCartData'

const CheckOutPage = () => {
const {cartItems, setCartItems,cartTotal, setCartTotal,loading, tax} = useCartData()

  return (
    <div className='pt-14 flex items-center justify-center gap-2'>
      <div className='flex items-start justify-center gap-20'>
        <OrderSummary cartItems={cartItems} cartTotal={cartTotal} tax={tax}/>
        <PaymentOptions />
      </div>
    </div>
  )
}

export default CheckOutPage
