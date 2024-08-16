import React from 'react'
import { useSearchParams } from "react-router-dom"

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const reference = searchQuery.get('reference');

  return (
    <div className='flex justify-center items-center min-h-screen text-center w-[1200px] mx-auto'>
      <div className=''>
        <h1 className='bg-gray-300/70 p-2 hover:bg-green-500/50 transition duration-300 ease-in-out'>
          Order Successful! We'll notify you soon.
        </h1>
        <p className='text-gray-800/50 mt-4'>Reference No.: {reference}</p>
      </div>
    </div>
  );
}

export default PaymentSuccess;
