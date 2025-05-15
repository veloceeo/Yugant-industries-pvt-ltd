import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-white flex flex-col justify-between items-center gap-10 py-20  w-full text-black overflow-hidden'>
    <div>
      <h2 className='text-4xl sm:text-6xl md:text-7xl font-extrabold text-center'>
        Never Miss a Deal
      </h2>
    </div>
    <div>
      <p className='text-gray-500 font-semibold text-center'>
        Subscribe to get the latest offers, new arrivals, and 
        exclusive discounts!
      </p>
    </div>
    <div  >
      <form action="" className='flex justify-around gap-4'>
        <input 
          type="text" 
          name='text' 
          className='px-7 py-2 border border-gray-500 rounded-md focus:border-black  ' 
          placeholder='you@example.com' 
        />
    <div>
    <button className='bg-black hover:bg-gray-900 text-bold rounded-md text-white  sm:text-sm  px-4 py-3 '>
          Submit
        </button>
    </div>
      </form>
    </div>
  </div>
  )
}

export default NewsLetter

