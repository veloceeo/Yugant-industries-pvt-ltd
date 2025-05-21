import React, { useEffect, useRef, useState } from "react";
import assets from "../assets/asset";
import { Link } from "react-router-dom";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

const services = [
  {
    src: assets.vector2,
    title: "Q-Commerce Solutions",
    description:
      "Experience the future of on-demand retail with our Q-Commerce Solutions, powered by Velocore. We deliver ultra-fast, hyper-local delivery services that redefine convenience for your customers",
  },
  {
    src: assets.vector5,
    title: "IT Consulting & Services",
    description:
      "Maximize your technology ROI with our strategic IT consulting and services. We work closely with your teams to understand your business goals and craft tailored solutions",
  },
  {
    src: assets.vector8,
    title: "Digital Marketing",
    description:
      "Our digital marketing services help brands grow in the digital world. We use data-driven strategies for SEO, social media, and content marketing to drive results",
  },
];

const ServiceCard = () => {
  const [serviceIndex,setServiceIndex]=useState(0)
  const serviceRefs = useRef([]);
   const handleNext = () => {
    setServiceIndex((serviceIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setServiceIndex((serviceIndex - 1 + services.length) % services.length);
  };
    useEffect(() => {
      if (serviceRefs.current[serviceIndex]) {
      serviceRefs.current[serviceIndex].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }, [serviceIndex]);
  return (

     <div className="py-10 bg-black text-white  ">
      {/* Header */}
    <div className="flex items-center justify-end mb-10 ">
        <span className="text-white   text-4xl sm:text-5xl ">
          S
        </span>
        <span className=" text-white   text-4xl sm:text-5xl  shadow-lg w-[190px] h-[100px]  flex  items-center justify-start "   style={{ backgroundImage: `url(${assets.rectangle56})` }}>
          ervices
        </span>
      </div>

      {/* Cards Grid */}
      <div className=" w-full max-w-7xl mx-auto px-4 hidden  md:block ">
        <div className=" grid  md:grid-cols-2  lg:grid-cols-3 gap-10 justify-items-center ">
          {services.map((service, index) => (
            <div
              key={index}
              className=" rounded-xl shadow-md px-6 py-6 w-[370px] h-[450px]  flex  bg-[#2a2a2a] border border-[#fafafa] "
            >
              <div className="text-center space-y-4 flex flex-col  ">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-amber-600/30">
                  <img src={service.src} alt="icon" className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-5 justify-around " >
                  <h2 className="text-lg font-semibold">{service.title}</h2>
                <p className="text-sm text-gray-300 md:text-xl ">
                  {service.description}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


<div className="md:hidden flex gap-4 px-4 sm:px-10 justify-center items-center py-6 rounded-xl shadow-lg">
  {/* Left Arrow */}
  <button onClick={handlePrev} aria-label="Previous member">
    <IoMdArrowDropleftCircle className="text-white text-4xl sm:text-5xl hover:scale-110 transition" />
  </button>

  {/* Scroll container */}
  <div className="overflow-x-auto scroll-smooth hide-scroll max-w-[450px] flex mx-auto h-[300px] ">
    {services.map((service, index) => (
      <div
        key={index}
        ref={(el) => (serviceRefs.current[index] = el)}
        className={`w-full flex-shrink-0 text-center transition-transform duration-500 ${
          index === serviceIndex ? "scale-100" : "scale-95 opacity-60"
        } bg-white/5 p-4 rounded-lg `}
      >
        <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-amber-600/30 mb-3">
          <img src={service.src} alt="icon" className="w-6 h-6" />
        </div>

        <div className="w-full h-auto  ">
          <p className="text-white font-semibold text-base sm:text-lg">{service.title}</p>
          <p className="text-gray-200 text-sm sm:text-base mt-2 leading-relaxed break-words">
            {service.description}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Right Arrow */}
  <button onClick={handleNext} aria-label="Next member">
    <IoMdArrowDroprightCircle className="text-white text-4xl sm:text-5xl hover:scale-110 transition" />
  </button>
</div>





            

      {/* More Button */}
      <div className="flex justify-center mt-12">
        <Link
          to="/services"
          className="px-10 py-2 text-sm border border-white text-white hover:bg-white hover:text-black rounded"
        >
          more
        </Link>
      </div>
    </div>

  );
};

export default ServiceCard;
