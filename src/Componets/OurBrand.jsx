import React from 'react';
import assets from '../assets/asset';
import { Link } from 'react-router-dom';

const OurBrand = () => {
  return (
    <div className="bg-[#5a5a5a] py-10">
        <div className="flex items-center  mb-10">
        <span className="bg-[#FFA135] text-white  py-3 transform -rotate-3 text-4xl sm:text-5xl font-bold shadow-lg">
          Our Br
        </span>
        <span className="text-4xl sm:text-5xl font-bold   transform -rotate-3 mb-2 ">ands</span>
      </div>
      
   

      {/* Content section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 px-5 py-10 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <img src={assets.group111} alt="Veloceeo Logo" className="h-24 w-auto" />
          <p className="text-sm md:text-base leading-relaxed text-white text-justify">
            Veloceeo is a disruptive Q-commerce initiative under Yugant Industries Pvt. Ltd., designed to reimagine urban commerce through the lens of hyperlocal logistics, vendor empowerment, and real-time intelligence. The brand is built on the core belief that the future of fast commerce lies not in expensive infrastructure but in leveraging the strength of regional ecosystems.
          </p>
        </div>

        {/* Right Column - Overlapping Images */}
        <div className="relative md:w-1/2 flex justify-center items-center">
          <img
            src={assets.girlSketch}
            alt="Team Working"
            className="w-[300px] h-auto object-cover rounded"
          />
          <img
            src={assets.board}
            alt="Discussion"
            className="w-[250px] h-auto absolute -top-20 right-6 md:right-20 rounded"
          />
        </div>
      </div>

      {/* More Button */}
      <div className="text-center mt-6">
        <Link
          to="/brands"
          className="bg-white text-black px-7 py-2 rounded-md  transition border  hover:bg-slate-200 "
        >
          more
        </Link>
      </div>
    </div>
  );
};

export default OurBrand;



