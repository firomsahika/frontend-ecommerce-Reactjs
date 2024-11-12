import React, { useEffect } from 'react';
import {  useLocation } from 'react-router-dom';

const PaymentStatus = () => {
    const location = useLocation()

    useEffect(() => {
        
        const timer = setTimeout(() => {
           window.location.href = "/"
        }, 5000); 
        return () => clearTimeout(timer)
    }, [location]);

    return (
        <div>
            <h1>Payment Successful!</h1>
            <p>Your payment was successful. You will be redirected to the homepage shortly.</p>
        </div>
    );
};

export default PaymentStatus;
 