import React from 'react'

const OrderItem = () => {
  return (
    <div className='flex items-center justify-end'>
      <div className='flex items-center justify-center'>
        <img />
        <div className='flex flex-col'>
            <h6>Product name</h6>
            <small>Quantity</small>
        </div>
      </div>
      <h6>$100.00</h6>
    </div>
  )
}

export default OrderItem
