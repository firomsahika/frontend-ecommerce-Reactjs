import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className='flex items-center justify-end relative'>
      <input type='text' className='p-2 w-60 h-8 rounded-sm outline-none text-black'/>
      <span className='absolute items-center justify-end bg-yellow-400'>
         <CiSearch size={32} className='text-black '/>
      </span>
    </div>
  )
}

export default SearchInput
