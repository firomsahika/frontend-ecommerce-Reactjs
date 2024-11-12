import React from 'react'
import { BASE_URL } from '@/api'

const OrderItem = ({ cartItem }) => {
  return (
    <div className='flex items-center justify-between gap-32'>
      <img
        src={`${BASE_URL}${cartItem.product.image}`}
        alt='product-image'
        className='w-20 h-20 object-cover rounded-md'
      />
      <div className='flex flex-col w-full'>
        <h6 className='font-semibold'>{cartItem.product.name}</h6>
        <small className='text-gray-500'>{`Quantity: ${cartItem.quantity}`}</small>
      </div>
      <h6 className='font-semibold'>{`$${cartItem.product.price}`}</h6>
    </div>
  )
}

export default OrderItem
