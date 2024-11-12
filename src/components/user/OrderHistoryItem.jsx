import React from 'react';
import { BASE_URL } from '@/api'


const OrderHistoryItem = ({cartItem}) => {
  

  return (
    <div className='flex flex-col border border-gray-300  shadow-lg my-4'>
     
      <div className='flex p-4 justify-between items-center bg-white rounded-b-lg shadow-sm'>
        <div className='flex items-center justify-center text-md text-gray-800'>
          <img className='w-20' src={`${BASE_URL}${cartItem.product.image}`}/>
          <div className='flex flex-col'>
          <h6 className='font-semibold'>{cartItem.product.name}</h6>
          <h6 className='font-semibold'>${cartItem.product.price}</h6>
          </div>
          
        </div>
        <div className='text-gray-800'>
          <p className='font-semibold'>Quantity: {cartItem.quantity}</p>
        </div>

    
      </div>
      
    </div>
  );
};

export default OrderHistoryItem;
