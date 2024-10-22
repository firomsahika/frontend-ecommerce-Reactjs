import React from 'react';
import OrderHistoryItem from './OrderHistoryItem';

const OrderHistoryItemContainer = () => {
  // Sample order history data
  const orders = [
    { productName: "Product 1", orderDate: "June 5, 2024", orderId: "123456", quantity: 1 },
    { productName: "Product 2", orderDate: "June 6, 2024", orderId: "123457", quantity: 2 },
    { productName: "Product 3", orderDate: "June 7, 2024", orderId: "123458", quantity: 1 },
    // Add more orders as needed
  ];

  return (
    <div className='py-4 flex flex-col items-center justify-center'>
       <div className='w-full'>
        <h4 className='w-full text-xl p-2 bg-green-500 text-white font-bold rounded-t-lg'>Order Summary</h4>
      </div>
      <div className='mx-20 w-full max-h-80 overflow-y-auto border border-gray-300 rounded-lg shadow-lg'>
        {orders.map((order, index) => (
          <OrderHistoryItem
            key={index}
            productName={order.productName}
            orderDate={order.orderDate}
            orderId={order.orderId}
            quantity={order.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderHistoryItemContainer;
