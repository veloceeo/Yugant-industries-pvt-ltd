import React, { useState, useRef, useEffect } from "react";
import assets from "../assets/asset";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";




const OurTeam = () => {
   const team = [
    {
      id: 1,
      name: "Debarshi Bera",
      role: "CTO",
      image: assets.sudip,
      description: "Oversees technology strategy, product development, and innovation for a seamless and scalable platform.",
      bgColor: "bg-[#F7F4E8]",
    },
    {
      id: 2,
      name: "Sudipta Shaw",
      role: "CEO",
      image:assets.sudiptha ,
      description: "Leads Veloceco's vision, strategy, and growth, driving overall business development and operations.",
      bgColor: "bg-[#F7F4E8]",
    },
    {
      id: 3,
      name: "Sudip Ghosh",
      role: "CIO",
      image: assets.debarshi,
      description: "Manages data, security, and IT infrastructure to enhance system performance and digital transformation.",
      bgColor: "bg-[#F7F4E8]",
    },
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
 <div className=" bg-[#5a5a5a] py-16 px-4">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-7xl text-white font-bold">Our Team</h1>
      </div>

      {/* Mobile / Tablet View */}
      <div className="lg:hidden px-4 ">
        <div className=" flex items-center justify-center gap-0 sm:gap-2  ">
          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            className=" p-1 rounded-full"
            aria-label="Previous"
          >
            <IoMdArrowDropleftCircle className="text-xl sm:text-2xl text-white" size={30}  />
          </button>

          {/* Card */}
          <div className="w-full max-w-sm mx-auto px-4">
            <div className={`${team[teamIndex].bgColor}  border border-[#fafafa] rounded-3xl p-10 shadow-2xl`}>
              <div className="mb-4">
                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={team[teamIndex].image}
                    alt={team[teamIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-black mb-1">{team[teamIndex].name}</h3>
                <p className="text-sm font-semibold text-black uppercase mb-2">{team[teamIndex].role}</p>
                <p className="text-sm text-black">{team[teamIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className=" text-xl sm:text-2xl"
            aria-label="Next"
          >
            <IoMdArrowDroprightCircle className="text-xl sm:text-2xl text-white"  size={30} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-4 mb-2 space-x-2">
          {team.map((_, index) => (
            <button
              key={index}
              onClick={() => setTeamIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === teamIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-10">
        {team.map((member) => (
          <div
            key={member.id}
            className={`${member.bgColor} rounded-3xl p-10 shadow-2xl text-center border-2 border-[#fafafa]  `}
          >
            <div className="mb-4">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full  object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-1">{member.name}</h3>
            <p className="text-sm font-semibold text-black uppercase mb-2">{member.role}</p>
            <p className="text-base text-black">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  



  );
};

export default OurTeam;