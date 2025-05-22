import React from 'react';
import assets from '../assets/asset';
import { Link } from 'react-router-dom';

const OurBrand = () => {
  return (
    <div className="bg-[#5a5a5a] py-10  ">
      <div className="flex items-center  ">
        <span className=" text-white   text-4xl sm:text-5xl  shadow-lg w-[190px] h-[100px]  flex  items-center justify-end  " style={{ backgroundImage: `url(${assets.rectangle56})` }} >
          Our Br
        </span>
        <span className="text-4xl sm:text-5xl  ">ands</span>
      </div>




      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10 md:py-15 w-full max-w-7xl mx-auto gap-5 ">
       
        <div className="flex flex-col gap-6 w-full md:w-1/2 items-center md:items-start">
          <img
            src={assets.group111}
            alt="Veloceeo Logo"
            className="h-24 sm:h-28 md:h-32 lg:h-36 w-[70%] md:w-[80%] lg:w-[70%] object-contain"
          />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white w-full md:w-[90%] px-2 sm:px-0 text-center md:text-left">
            <span className="font-semibold text-white">Veloceeo</span> is a disruptive Q-commerce initiative under Yugant Industries Pvt. Ltd., designed to reimagine urban commerce through the lens of hyperlocal logistics, vendor empowerment, and real-time intelligence. The brand is built on the core belief that the future of fast commerce lies not in expensive infrastructure but in leveraging the strength of regional ecosystems.
          </p>
        </div>

       
        <div className="relative w-full md:w-1/2 flex justify-center items-center min-h-[400px] md:min-h-[480px] lg:min-h-[520px] -mt-10 md:-mt-0 ">
          
          <img
            src={assets.board}
            alt="Discussion"
            className="w-[220px] sm:w-[260px] md:w-[340px] lg:w-[480px] object-cover rounded shadow-lg z-10"
          />
         
          <img
            src={assets.girlSketch}
            alt="Team Working"
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-6 md:right-6 lg:right-2 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[380px] object-cover rounded-lg shadow-md z-20 border-4 border-white"
          />
        </div>
      </div>







    
      <div className="text-center mt-6 px-4">
        <Link
          to="/brands"
          className="bg-white text-black px-5 sm:px-7 py-2 rounded-md transition border hover:bg-slate-200 inline-block"
        >
          more
        </Link>
      </div>
    </div>
  );
};

export default OurBrand;




