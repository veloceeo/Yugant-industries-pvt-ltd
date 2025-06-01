import React from 'react';
import assets from '../assets/asset';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
    
  const handleBrandNav = (hash) => {
    navigate(`/brands${hash}`);
  };
   
  return (
    <footer className="bg-black text-white font-sans">
                           
      <div className="w-full px-6 py-12 mb-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 justify-items-center">
        {/* Logo & Contact Info */}
        <div className="flex flex-col gap-6 text-sm md:text-base mb-0 md:mb-4">
           <img src={assets.yugant} alt='Yugant Logo' className='w-24 h-24 md:w-32 md:h-32 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-lg' />
                   
          <div className='flex space-x-4'>
            <img src={assets.icon1} alt='Instagram' className='w-4 h-4 md:w-6 md:h-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80 filter brightness-90 hover:brightness-110' />
            <img src={assets.icon2} alt='YouTube' className='w-4 h-4 md:w-6 md:h-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80 filter brightness-90 hover:brightness-110' />
            <img src={assets.icon3} alt='LinkedIn' className='w-4 h-4 md:w-6 md:h-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80 filter brightness-90 hover:brightness-110' />
            <img src={assets.icon} alt='X Logo' className='w-4 h-4 md:w-6 md:h-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80 filter brightness-90 hover:brightness-110' />
          </div>
           
          <div>
            <p className='font-bold text-sm md:text-lg mb-4  pb-2 text-gray-100'>GET IN TOUCH</p>
            <div className='flex items-start gap-3 mb-3 group'>
              <GrLocation className='mt-1 text-gray-400 group-hover:text-white transition-colors duration-300 flex-shrink-0' />
              <div>
                <p className='font-semibold text-gray-200'>Location</p>
                <p className='text-gray-400 text-[10px] md:text-sm leading-relaxed hover:text-gray-300 transition-colors duration-300'>83 S. P. Mukherjee Road,
                  <br />
                  4th Floor Devi Market,
                  <br /> Kolkata-700026</p>
              </div>
            </div>
            <div className='flex items-start gap-3 mb-3 group'>
              <HiOutlineMail className='mt-1 text-gray-400 group-hover:text-white transition-colors duration-300 flex-shrink-0' />
              <div>
                <p className='font-semibold text-gray-200'>Email</p>
                <p className='text-gray-400 text-[10px] md:text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer'>info@yugant.com</p>
              </div>
            </div>
            <div className='flex items-start gap-3 group'>
              <HiPhone className='mt-1 text-gray-400 group-hover:text-white transition-colors duration-300 flex-shrink-0' />
              <div>
                <p className='font-semibold text-gray-200'>Phone</p>
                <p className='text-gray-400 text-[10px] md:text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer'>+91 9876543210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className='flex flex-col items-center justify-center text-center mt-8 md:mt-0'>
          <p className='font-bold text-sm md:text-lg mb-5 md:mb-10  pb-2 text-gray-100 min-w-max'>Yugant</p>
          <ul className='space-y-3 text-sm sm:text-base md:text-lg text-gray-300'>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium' onClick={()=>navigate('/')} >Home</li>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium' onClick={()=>navigate('/about') }>About Us </li>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium' onClick={()=>navigate('/team') } > Our Team</li>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium' onClick={()=>navigate('/services') } >Service</li>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium' onClick={()=>navigate('/career') } >Career</li>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium' onClick={()=>navigate('/contact') } >Contact</li>                   
          </ul>
        </div>

        {/* veloceo */}
        <div className='flex flex-col items-center justify-center text-center mt-4 md:mt-0 gap-0 mb-12 '>
          <p className='font-bold text-sm md:text-lg mb-3 md:mb-5 pb-2  text-gray-100 min-w-max'>Veloceeo</p>
          <ul className='space-y-3 text-sm sm:text-base md:text-lg text-gray-300'>
        <li className="cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium" onClick={() => handleBrandNav('#home')}>Home</li>
            <li className="cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium" onClick={() => handleBrandNav('#about')}>About Us</li>
            <li className="cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium" onClick={() => handleBrandNav('#innovation')}>Innovation</li>
            <li className="cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium" onClick={() => handleBrandNav('#vision')}>Vision</li>
            <li className="cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium" onClick={() => handleBrandNav('#contact')}>Contact Us</li>
            <li>   
            </li>
            <li> </li>
            <li> </li>
          </ul>
        </div>
               
        {/* Resources */}
          <div className='flex flex-col items-center justify-center text-center mt-4 md:mt-7'>
          <p className='font-bold text-sm md:text-lg mb-5 md:mb-10  pb-2 text-gray-100 min-w-max'>Resources</p>
          <ul className='space-y-3 text-sm sm:text-base md:text-lg text-gray-300'>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium'>Blog</li>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium'>Best Practices</li>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium'>Colors</li>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium'>Color Wheel</li>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium'>Support</li>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium'>Developers</li>
            <li className='cursor-pointer hover:text-white transition-all duration-300 hover:translate-x-1 hover:font-medium'>Resource Library</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='text-center text-sm text-gray-300 bg-[#5a5a5a] py-6 border-t border-gray-700 shadow-inner'>
        <div className="w-full px-4">
          <p className="hover:text-white transition-colors duration-300">&copy; 2025 Yugant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



