import React, { useContext, useState } from 'react';
import UserInfo from './UserInfo';
import OrderHistoryItemContainer from './OrderHistoryItemContainer';
import { AuthContext } from '@/context/AuthContext';
import useCartData from '@/hooks/useCartData';
import useOrderedData from '@/hooks/useOrderedData';

const UserProfilePage = () => {
 
  const {cartItems, setCartItems,cartTotal, setCartTotal,loading, tax} = useCartData()
  
  return (
    <div className='w-full flex flex-col items-center'>
      <UserInfo />
      <div className='mt-5 w-3/4'> {/* Adjusted width to avoid full width */}
        <OrderHistoryItemContainer cartItems={cartItems} cartTotal={cartTotal} tax={tax}/>
      </div>
    </div>
  );
};

export default UserProfilePage;
