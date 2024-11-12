
import React, { useContext, useEffect, useState } from 'react'

import api from '@/api';
import { AuthContext } from '@/context/AuthContext';


const PaymentOptions = () => {

  const cart_code = localStorage.getItem('cart_code')
  const [loading, setLoading] = useState(false)
  const {email, first_name, last_name, phone} = useContext(AuthContext)

  async function handlePayment() {
    setLoading(true)

    try {
      const response = await api.post('initialize_payment/',{
        currency: 'ETB',
        cart_code: cart_code,
        email:email,
        phone_number: phone,
        first_name: first_name,
        last_name: last_name,
        payment_title: 'Payment for Services',
        description: 'A description of the payment',
        redirect_url:'http://localhost:5173/payment-status'
      })

    const data = response.data;

    if (data.checkout_url) {
      window.location.href = data.checkout_url;
    } else {
      console.error("URL not found!!");
    }
    } catch (error) {
      // Log both error message and error response
      if (error.response) {
        console.error("Error initializing payment:", error.response.data);
      } else {
        console.error("Error initializing payment:", error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  
  

  return (
    <div className='flex flex-col gap-y-5'>
      <h4 className='w-full bg-slate-800 text-green-400 font-semibold p-2'>Payment Options</h4>
      <a onClick={handlePayment} target="_blank" rel="noopener noreferrer" className='bg-green-400 text-white font-semibold px-10 py-2'>
        {loading ? "Processing" : "Pay with Chapa"}
      </a>
    </div>
  );
};

export default PaymentOptions;
