import React from 'react';
import assets from '../assets/asset';

const JobOpeningCard = () => {
    return (
        <div className='py-5'>
            <div className="flex items-center mb-10">
                <span className="bg-[#FFA135] text-white px-4 py-3 transform -rotate-3 text-4xl sm:text-5xl font-bold shadow-lg">
                    Caree
                </span>
                <span className="text-4xl sm:text-5xl font-bold">r</span>
            </div >
            <p className='text-center text-xl mb-10'>Job opening in yugant</p>
            <div className="flex flex-col md:flex-row gap-10  items-center justify-center ">
                <div>
                    <img src={assets.girlSketch} alt="Job opening" className="w-[266px] h-[266px]  object-cover mb-2" />
                </div>
                <div className="flex-shrink-0 w-[266px] text-center">
                    <img src={assets.board} alt="Job opening" className="w-[266px] h-[190px]  object-cover mb-2" />
                    <img src={assets.team} alt="Job Opening" className='w-[266px] h-[76px]  object-cover ' />
                </div>
            </div>
            <div className='flex justify-center mt-10 '>
                <button className='border border-white hover:border-slate-400 transition-colors px-8 py-2 rounded mx-auto'>
                    Apply
                </button>
            </div>
        </div>
    );
};

export default JobOpeningCard