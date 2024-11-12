import React from 'react';
import OrderHistoryItem from './OrderHistoryItem';


const OrderHistoryItemContainer = ({cartItems, cartTotal, tax}) => {
  const total = (cartTotal + tax).toFixed(2);

  return (
    <div className='py-4 flex flex-col items-center justify-center border'>
       <div className='w-full'>
        <h4 className='w-full text-xl p-4 bg-yellow-400 font-bold text-black'>Order Summary</h4>
      </div>
      <div className='mx-20 w-full max-h-80 overflow-y-auto border border-gray-300  shadow-lg'>
        { cartItems.map(cartItem => <OrderHistoryItem key={cartItem.id} cartItem={cartItem}/>)}
      </div>
      <div className='w-full text-xl font-bold bg-white p-4 items-center justify-center'>
        <p>Total = {`$${total}`}</p>
      </div>
    </div>
  );
};

export default OrderHistoryItemContainer;
