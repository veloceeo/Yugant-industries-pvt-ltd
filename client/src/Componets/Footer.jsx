import React from 'react';
import assets from '../assets/asset';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate=useNavigate()
  return (
    <footer className="bg-black  text-white font-sans">
      
        
      
      <div className=" px-6 mb-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 justify-items-center  ">
        {/* Logo & Contact Info */}
        <div className="flex flex-col gap-4 text-sm md:text-base mb-0 md:mb-4 ">
           <img src={assets.yugant} alt='Yugant Logo' className='  w-24 h-24 md:w-32 md:h-32  object-contain' />
          
          <div className='flex space-x-4'>
            <img src={assets.icon1} alt='Instagram' className=' w-4 h-4 md:w-6 md:h-6' />
            <img src={assets.icon2} alt='YouTube' className='w-4 h-4 md:w-6 md:h-6' />
            <img src={assets.icon3} alt='LinkedIn' className='w-4 h-4 md:w-6 md:h-6' />
            <img src={assets.icon} alt='X Logo' className='w-4 h-4 md:w-6 md:h-6' />
          </div>

          <div>
            <p className='font-bold  text-sm  md:text-lg mb-3'>GET IN TOUCH</p>
            <div className='flex items-start gap-3 mb-2'>
              <GrLocation className='mt-1' />
              <div>
                <p className='font-semibold'>Location</p>
                <p className='text-gray-400 text-[10px]  md:text-sm'>83 S. P. Mukherjee Road,
                  <br />
                  4th Floor Devi Market,
                  <br /> Kolkata-700026</p>
              </div>
            </div>
            <div className='flex items-start gap-3 mb-2'>
              <HiOutlineMail className='mt-1' />
              <div>
                <p className='font-semibold '>Email</p>
                <p className='text-gray-400 text-[10px]  md:text-sm ' >info@yugant.com</p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <HiPhone className='mt-1' />
              <div>
                <p className='font-semibold  '>Phone</p>
                <p className='text-gray-400 text-[10px]  md:text-sm'>+91 9876543210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className='flex flex-col items-center justify-center text-center mt-8 md:mt-0  ' >
          <p className='font-bold text-sm  md:text-lg mb-5  md:mb-10 '>Yugant</p>
          <ul className=' space-y-2 text-sm sm:text-base md:text-lg text-gray-300'>
            <li className='cursor-pointer hover:text-white' onClick={()=>navigate('/')} >Home</li>
            <li className='cursor-pointer hover:text-white' onClick={()=>navigate('/about') }>About Us </li>
            <li className='cursor-pointer hover:text-white' onClick={()=>navigate('/team') } > Our Team</li>
            <li className='cursor-pointer hover:text-white' onClick={()=>navigate('/services') } >Service</li>
            <li className='cursor-pointer hover:text-white' onClick={()=>navigate('/career') } >Career</li>
            <li className='cursor-pointer hover:text-white' onClick={()=>navigate('/contact') } >Contact</li>
        
          </ul>
        </div>

        {/* veloceo */}
        <div className='flex flex-col items-center justify-center text-center mt-4 md:mt-0  ' >
          <p className='font-bold text-sm  md:text-lg  mb-5  md:mb-10 '>Veloceo</p>
          <ul className=' space-y-2 text-sm sm:text-base md:text-lg text-gray-300'>
            <li className='cursor-pointer hover:text-white' onClick={()=>navigate('/brands')} >Home</li>
            <li className='cursor-pointer hover:text-white' onClick={()=>navigate('/brands')} >About Us</li>
            <li className='cursor-pointer hover:text-white' onClick={()=>navigate('/brands')} >Innovation</li>
            <li className='cursor-pointer hover:text-white' onClick={()=>navigate('/brands')} >Vision</li>
            <li className='cursor-pointer hover:text-white' onClick={()=>navigate('/brands')} >Contact Us</li>
          </ul>
        </div>

    

        {/* Resources */}
          <div className='flex flex-col items-center justify-center text-center' >
          <p className='font-bold text-sm  md:text-lg mb-5   md:mb-10   '>Resources</p>
          <ul className=' space-y-2 text-sm sm:text-base md:text-lg text-gray-300  '>
            <li className='cursor-pointer hover:text-white'>Blog</li>
            <li className='cursor-pointer hover:text-white'>Best Practices</li>
            <li className='cursor-pointer hover:text-white'>Colors</li>
            <li className='cursor-pointer hover:text-white'>Color Wheel</li>
            <li className='cursor-pointer hover:text-white'>Support</li>
            <li className='cursor-pointer hover:text-white'>Developers</li>
            <li className='cursor-pointer hover:text-white'>Resource Library</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='text-center text-sm text-gray-400 bg-[#5a5a5a] py-4 border-t border-gray-700'>
        &copy; 2025 Yugant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;




