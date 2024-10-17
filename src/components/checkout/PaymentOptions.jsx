import React from 'react'
import { FaPaypal } from "react-icons/fa";
import telebirr from "../../assets/image/TeleBirr Logo.png"

const PaymentOptions = () => {
  return (
    <div className=' flex flex-col gap-y-5'>
      <h4 className='w-full bg-yellow-400 p-2 font-semibold'>Payment Options</h4>
      <div>
        <button className='flex gap-3 items-center justify-center bg-blue-500 text-nowrap px-20 py-1 font-semibold rounded-sm text-white'><FaPaypal size={40}  className=''/>Pay with PayPal</button>
      </div>
      <div>
        <button className='bg-blue-500 flex items-center justify-center gap-2 text-nowrap  px-20 py-1 font-semibold rounded-sm text-white'><img src={telebirr} className='w-8 text-white bg-white rounded-md '/> Pay with Telebirr</button>
      </div>
    </div>
  )
}

export default PaymentOptions
