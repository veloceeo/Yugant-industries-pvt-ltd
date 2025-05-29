import React from "react";
import assets from "../assets/asset";
import { Link } from "react-router-dom";

const services = [
  {
    src: assets.vector2,
    title: "Q-Commerce Solutions",
    description:
      "Experience the future of on-demand retail with our Q-Commerce Solutions, powered by Velocore. We deliver ultra-fast, hyper-local delivery services that redefine convenience for your customers...",
  },
  {
    src: assets.vector5,
    title: "IT Consulting & Services",
    description:
      "Maximize your technology ROI with our strategic IT consulting and services. We work closely with your teams to understand your business goals and craft tailored solutions...",
  },
  {
    src: assets.vector8,
    title: "Digital Marketing",
    description:
      "Our digital marketing services help brands grow in the digital world. We use data-driven strategies for SEO, social media, and content marketing to drive results...",
  },
];

const ServiceCard = () => {
  return (
    <div className="py-10 bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-end  mb-10">
        <span className=" text-white t text-4xl sm:text-5xl font-bold shadow-lg transform -rotate-3  ">
          S
        </span>
        <span className="text-4xl sm:text-5xl font-bold bg-[#FFA135] transform -rotate-3  py-3 mb-2  ">ervices</span>
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#5a5a5a] rounded-xl shadow-md px-5 py-6 w-[300px] h-[360px] flex flex-col justify-between"
            >
              <div className="text-center space-y-4">
                <img
                  src={service.src}
                  alt="icon"
                  className="w-10 h-10 mx-auto"
                />
                <h2 className="text-lg font-semibold text-white">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="text-center mt-4">
                <button className="px-4 py-1.5 text-sm border border-white text-white hover:bg-white hover:text-black transition rounded">
                  more
                </button>
              </div>
            </div>
          ))}
        </div>
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





