import React, { useState } from 'react';
import axios from 'axios';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/subscribe`, { email });

      if (res.data.success) {
        setSuccessMsg("Subscribed successfully!");
        setEmail('');
        setTimeout(() => setSuccessMsg(''), 5000);
      }
    } catch (error) {
      console.error("Subscription failed:", error);
    }
  };

  return (
    <div className='bg-white flex flex-col justify-center items-center gap-10 py-20 px-4 sm:px-8 lg:px-20 text-black w-full h-sm md:h-[570px]'>
      <div className='mx-auto'>
        <h2 className='text-3xl sm:text-6xl md:text-7xl font-extrabold text-center'>
          Never Miss a Deal
        </h2>
      </div>
      <div>
        <p className='text-gray-500 font-semibold text-center'>
          Subscribe to get the latest offers, new arrivals, and 
          exclusive discounts!
        </p>
      </div>

      {successMsg && (
        <div className="text-green-600 font-semibold text-center">{successMsg}</div>
      )}

      <div className='px-30'>
        <form onSubmit={handleSubmit} className='flex justify-around gap-4'>
          <input 
            type="email" 
            name='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='px-7 py-2 border border-black rounded-md w-[30vw] placeholder:text-sm' 
            placeholder='you@example.com' 
            required
          />
          <div>
            <button
              className='bg-[#2c2c2c] hover:bg-gray-900 text-bold rounded-md text-white sm:text-sm px-1 md:px-4 py-2 md:py-3'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;


