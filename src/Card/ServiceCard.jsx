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
      <div className="flex items-center justify-end mb-12">
        <span className="text-4xl sm:text-5xl font-bold text-white transform -rotate-3 mt-2 ">S</span>
        <span className="text-4xl sm:text-5xl font-bold bg-[#FFA135]  py-2 transform -rotate-3">
          ervices
        </span>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#2b2b2b] rounded-xl shadow-md px-6 py-6 w-[300px] h-[360px] flex flex-col justify-between"
            >
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-amber-600/30">
                  <img src={service.src} alt="icon" className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-semibold">{service.title}</h2>
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-5">
                  {service.description}
                </p>
              </div>
              <div className="text-center mt-4">
                <button className="px-5 py-1.5 text-sm border border-gray-400 text-gray-200 rounded hover:bg-gray-200 hover:text-black transition duration-300">
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
