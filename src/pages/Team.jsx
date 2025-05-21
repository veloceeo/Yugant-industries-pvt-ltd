import assets from "../assets/asset";
import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

const Team = () => {
  const team = [
    { id: 1, name: "Alice Johnson", role: "Frontend Developer", image: assets.shape },
    { id: 2, name: "Bob Smith", role: "Backend Developer", image: assets.shape },
    { id: 3, name: "Carol Williams", role: "UI/UX Designer", image: assets.shape },
  ];

  const [teamIndex, setTeamIndex] = useState(0);
  const memberRefs = useRef([]);

  const handleNext = () => {
    setTeamIndex((teamIndex + 1) % team.length);
  };

  const handlePrev = () => {
    setTeamIndex((teamIndex - 1 + team.length) % team.length);
  };

  useEffect(() => {
    if (memberRefs.current[teamIndex]) {
      memberRefs.current[teamIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [teamIndex]);

  return (
    <div className="bg-[#5a5a5a] bg-opacity-20 rounded-lg py-20 overflow-hidden">
      {/* Title */}
          <div className="flex items-center justify-end mb-10 ">
        <span className="text-white   text-4xl sm:text-5xl ">
          Our
        </span>
        <span className=" text-white   text-4xl sm:text-5xl  shadow-lg w-[190px] h-[100px]  flex  items-center justify-start "   style={{ backgroundImage: `url(${assets.rectangle56})` }}>
          Team
        </span>
      </div>


      {/* Carousel */}
      <div className=" md:hidden flex gap-4 px-4 sm:px-10 justify-center items-center">
        {/* Left Arrow */}
        <button onClick={handlePrev} aria-label="Previous member">
          <IoMdArrowDropleftCircle className="text-white text-4xl sm:text-5xl hover:scale-110 transition" />
        </button>

        {/* Scroll container */}
        <div className="overflow-x-auto scroll-smooth whitespace-nowrap hide-scroll max-w-[350px] flex mx-auto">
          {team.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => (memberRefs.current[index] = el)}
              className={`w-[220px] sm:w-[280px] md:w-[340px] flex-shrink-0 text-center transition-transform duration-500 ${
                index === teamIndex ? "scale-100" : "scale-95 opacity-60"
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] object-cover rounded-full sm:rounded-md mx-auto mb-4"
              />
              <p className="text-white font-semibold text-base sm:text-lg">{member.name}</p>
              <p className="text-gray-400 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={handleNext} aria-label="Next member">
          <IoMdArrowDroprightCircle className="text-white text-4xl sm:text-5xl hover:scale-110 transition" />
        </button>
      </div>

      <div className="w-full  gap-8 hidden md:flex justify-center items-center " >
         {team.map((member, index) => (
            <div
              className={` md:w-[500px] flex-shrink-0 text-center transition-transform duration-500 `}
            >
              <img
                src={member.image}
                alt={member.name}
                className=" md:w-[400px] md:h-[400px] object-cover rounded-full sm:rounded-md mx-auto mb-4"
              />
              <p className="text-white font-semibold text-base sm:text-lg">{member.name}</p>
              <p className="text-gray-400 text-sm mt-1">{member.role}</p>
            </div>
          ))}
      </div>


    </div>
  );
};

export default Team;

