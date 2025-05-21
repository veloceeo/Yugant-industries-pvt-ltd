import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-white flex flex-col justify-center items-center gap-10 py-20 px-4 sm:px-8 lg:px-20 text-black w-full h-sm md:h-[570px]  '>
    <div className='mx-auto' >
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
    <div className='px-30' >
      <form action="" className='flex justify-around gap-4'>
        <input 
          type="text" 
          name='text' 
          className='px-7 py-2 border border-black  rounded-md  ' 
          placeholder='you@example.com' 
        />
    <div>
    <button className='bg-[#2c2c2c] hover:bg-gray-900 text-bold rounded-md text-white  sm:text-sm  px-1 md:px-4 py-2 md:py-3 ' type='submit' >
          Submit
        </button>
    </div>
      </form>
    </div>
  </div>
  )
}

export default NewsLetter

