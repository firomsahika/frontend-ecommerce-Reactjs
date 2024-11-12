import { AuthContext } from '@/context/AuthContext';

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const UserInfo = () => {
  const {
    isAuthenticated,
    username,
    first_name,
    last_name,
    email,
    phone,
    setIsAuthenticated } = useContext(AuthContext)


    function logout() {
      localStorage.removeItem("access");
      setIsAuthenticated(false);
    }




  return (
    <div className=' flex items-start justify-center gap-10  pt-5 w-3/4'> {/* Center and limit width */}
      <div className='flex h-60 w-1/4 items-center rounded-lg justify-center flex-col gap-y-3 border border-gray-300 shadow-lg p-8'> {/* Increased height */}
        <img 
           src="https://freesvg.org/img/abstract-user-flat-4.png"
          alt='User Avatar'
          className='rounded-full w-28 mb-3 border-2 border-green-400'
        />
        <h4 className='text-xl font-semibold text-gray-800'>{`${first_name} ${last_name}`}</h4>
        <p className='font-semibold text-gray-600'>{email}</p>
        <button className='w-full text-white font-bold px-4 py-2 bg-green-500 hover:bg-green-600 transition duration-200 rounded-md'>
          Edit Profile
        </button>
      </div>

      <div className='h-48 w-3/4 flex flex-col gap-y-2 border border-gray-300 rounded-lg shadow-lg p-4'> {/* Increased height and added padding */}
        <h5 className='text-xl pl-2 w-full text-white font-bold bg-green-500 rounded-t-lg'>Account Overview</h5>
        <div className='flex flex-col gap-y-2 text-gray-700'>
          <p>
            <strong>Full Name:</strong> {`${first_name} ${last_name}`}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
        </div>
      </div>
        <button onClick={logout } className='border text-xl mt-20  text-red-500 rounded-md font-bold px-4 py-2 hover:bg-slate-800 hover:text-red-500 '>
        <NavLink
              to="/"
              // className={({ isActive }) => isActive ? "bg-green-400 text-slate-800 font-bold text-md px-4 py-2 rounded-sm" : "text-green-400"}
            >
              Logout
            </NavLink>
        </button>
    </div>
  );
};

export default UserInfo;
