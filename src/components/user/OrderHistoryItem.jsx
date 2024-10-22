import React from 'react';

const OrderHistoryItem = ({ productName, orderDate, orderId, quantity }) => {
  return (
    <div className='flex flex-col border border-gray-300 rounded-lg shadow-lg my-4'>
     
      <div className='flex p-4 justify-between items-center bg-white rounded-b-lg shadow-sm'>
        <div className='flex flex-col text-md text-gray-800'>
          <h6 className='font-semibold'>{productName}</h6>
          <p className='text-sm'>Order Date: {orderDate}</p>
          <p className='text-sm'>Order ID: {orderId}</p>
        </div>
        <div className='text-gray-800'>
          <p className='font-semibold'>Quantity: {quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryItem;
