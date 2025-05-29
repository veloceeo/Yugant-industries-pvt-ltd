import React from 'react';
import assets from '../assets/asset';
import { Link } from 'react-router-dom';

const JobOpeningCard = () => {
    return (
        <div className='py-5 '>
            {/* Header */}
         <div className="flex items-center  mb-10">
                <span className=" text-white   text-4xl sm:text-5xl  shadow-lg w-[190px] h-[100px]  flex  items-center justify-end  "  style={{ backgroundImage: `url(${assets.rectangle56})` }} >
                    Caree
                </span>
                <span className="text-4xl sm:text-5xl  ">r</span>
            </div>

            {/* Subtitle */}
            <p className='text-center text-xl mb-5 md:mb-10 '>Job opening in Yugant</p>

            {/* Image Section */}
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center    ">
                <div className="w-full md:w-1/2 hidden md:block ">
                    <img
                        src={assets.girlSketch}
                        alt="Job opening"
                        className="w-full h-[514px] object-cover rounded p-5 "
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col  ">
                    <img
                        src={assets.board}
                        alt="Job board"
                        className="w-full h-[280px] object-cover rounded p-5 hidden md:block "
                    />
                    <img
                        src={assets.team}
                        alt="Team"
                        className="w-full h-[250px] object-cover rounded p-3"
                    />
                </div>
            </div>

            {/* Apply Button */}
            <div className='flex justify-center mt-10'>
             <Link to='/career'
              >
                <button className='border border-white hover:border-slate-400 transition-colors px-8 py-2 rounded'>
                    Apply
                </button>
             </Link>
            </div>
        </div>
    );
};

export default JobOpeningCard;
