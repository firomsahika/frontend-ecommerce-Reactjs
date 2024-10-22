import React from 'react';
import UserInfo from './UserInfo';
import OrderHistoryItemContainer from './OrderHistoryItemContainer';

const UserProfilePage = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <UserInfo />
      <div className='mt-5 w-3/4'> {/* Adjusted width to avoid full width */}
        <OrderHistoryItemContainer />
      </div>
    </div>
  );
};

export default UserProfilePage;
