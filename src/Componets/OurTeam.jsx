import React from 'react';
import assets from "../assets/asset";


const OurTeam = () => {


  return (
    <div className="bg-[#5a5a5a] bg-opacity-20 rounded-lg  py-10 overflow-hidden ">

      <div className="flex items-center justify-end  mb-10">
        <span className=" text-white t text-4xl sm:text-5xl font-bold shadow-lg transform -rotate-3  ">
          Our
        </span>
        <span className="text-4xl sm:text-5xl font-bold bg-[#FFA135] transform -rotate-3  py-3  ">Team</span>
      </div>


      <div className="overflow-x-auto pb-4 px-10  ">
        <div className="flex gap-20 justify-between mx-auto max-w-5xl  ">
          <div className="w-64 text-center flex-shrink-0">
            <img
              src={assets.shape}
              alt="Member 1"
              className="w-64 h-64 rounded-full object-cover mx-auto mb-4"
            />
            <p className="text-white font-semibold text-lg">Name</p>
            <p className="text-gray-400 text-sm mt-2">
              body of the page our team
            </p>
          </div>

          <div className="w-64 text-center flex-shrink-0">
            <img
              src={assets.shape}
              alt="Member 2"
              className="w-64 h-64 rounded-full object-cover mx-auto mb-4"
            />
            <p className="text-white font-semibold text-lg">Name</p>
            <p className="text-gray-400 text-sm mt-2">
              body of the page our team
            </p>
          </div>

          <div className="w-64 text-center flex-shrink-0">
            <img
              src={assets.shape}
              alt="Member 3"
              className="w-64 h-64 rounded-full object-cover mx-auto mb-4"
            />
            <p className="text-white font-semibold text-lg">Name</p>
            <p className="text-gray-400 text-sm mt-2">
              body of the page our team
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurTeam;
