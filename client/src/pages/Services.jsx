import React, { useRef, useState, useEffect } from "react";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import assets from "../assets/asset";

const services = [
  {
    src: assets.vector2,
    title: "E-Commerce Solutions",
    description:
      "Build your online business with our custom, feature-rich e-commerce solutions. We create responsive, user-friendly platforms that integrate seamlessly with your existing systems. From payment processing to inventory management, our solutions handle the complexities so you can focus on growth. We provide ongoing support and optimization to ensure your store remains competitive and scales effectively as your business expands.",
  },
  {
    src: assets.vector7,
    title: "Q-Commerce Solutions",
    description:
      "Experience the future of on-demand retail with our Q-Commerce Solutions, powered by Velocore. We deliver ultra-fast, hyper-local delivery services that redefine convenience for your customers. Our platform connects retailers to nearby users, processes orders instantly, and manages last-mile logistics with precision. Featuring real-time tracking, dynamic routing, and delivery time guarantees to enhance customer satisfaction.",
  },
  {
    src: assets.vector5,
    title: "Web & App Development",
    description:
      "We build stunning, functional applications that engage users and drive growth. Our development team combines technical skill with creative vision to deliver solutions that exceed expectations. Whether you need a corporate website, customer portal, or mobile app, we tailor our approach to your specific requirements. Our solutions are scalable, secure, and built using the latest technologies for maximum performance.",
  },
  {
    src: assets.vector4,
    title: "Software Development",
    description:
      "Our custom software development solutions help businesses streamline operations and improve efficiency. We specialize in building scalable, secure applications that solve complex business needs. Whether it's workflow automation, data management systems, or enterprise-level solutions, our team delivers high-quality software tailored to your specific requirements.",
  },
  {
    src: assets.vector3,
    title: "Robotics Development",
    description:
      "Harness the power of robotics to transform your operations and stay ahead of the competition. Our robotics solutions combine cutting-edge hardware with advanced software to automate complex tasks and enhance productivity. From industrial automation to specialized applications, we develop custom robotics that integrate seamlessly with your existing processes and drive efficiency.",
  },
  {
    src: assets.vector8,
    title: "IT & Cloud Solutions",
    description:
      "Modernize your IT infrastructure with our comprehensive cloud solutions and managed services. We help businesses migrate to the cloud, optimize their infrastructure, and implement robust security measures. Our cloud specialists ensure smooth operations, reduced downtime, and scalable solutions that grow with your business while maximizing your technology investment.",
  },
  {
    src: assets.group1,
    title: "AI & Machine Learning",
    description:
      "Leverage the potential of artificial intelligence to drive innovation and create competitive advantages. Our AI solutions help businesses automate processes, gain valuable insights from data, and enhance decision-making capabilities. From predictive analytics to computer vision and natural language processing, we implement AI technologies tailored to your specific business objectives.",
  },
  {
    src: assets.maskGroup,
    title: "Digital Marketing Services",
    description:
      "Boost your online presence and drive conversions with our comprehensive digital marketing services. We develop data-driven strategies across search engine optimization, paid advertising, social media, and content marketing to connect with your target audience. Our approach combines creative thinking with analytical precision to deliver measurable results and a strong return on investment.",
  },
  {
    src: assets.vector6,
    title: "IT Consulting & Services",
    description:
      "Maximize your technology ROI with our strategic IT consulting and services. We work closely with your teams to understand your business goals and craft tailored solutions that address your unique challenges. From infrastructure planning to cybersecurity assessments and technology roadmaps, our experienced consultants provide the guidance and implementation support you need to succeed.",
  },
];


const Services = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const cardRefs = useRef([]);

  const cardsToShow = 3;

  const handleNext = () => {
    setServiceIndex((prev) => (prev + cardsToShow) % services.length);
  };

  const handlePrev = () => {
    setServiceIndex((prev) => (prev - cardsToShow + services.length) % services.length);
  };


  const visibleServices = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleServices.push(services[(serviceIndex + i) % services.length]);
  }

  useEffect(() => {
    if (cardRefs.current[serviceIndex]) {
      cardRefs.current[serviceIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [serviceIndex]);

  return (
    <div className="flex justify-center" >
      <div className="py-12 md:py-20 px-4 flex flex-col items-center bg-black text-white">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 md:mb-10 text-center">Services</h1>

        {/* Desktop */}
        <div className="hidden lg:flex items-center w-full max-w-[1200px]  gap-4 px-20 justify-between">
          {/* Left Arrow */}
          <button onClick={handlePrev} aria-label="Previous services" className="flex-shrink-0">
            <IoMdArrowDropleftCircle className="text-white text-4xl md:text-5xl hover:scale-110 transition-transform" />
          </button>


          <div className="flex gap-6 overflow-hidden w-full ">
            {visibleServices.map((service) => (
              <div
                key={service.title}
                className="bg-[#2a2a2a] border border-[#fafafa] rounded-xl shadow-md py-6 px-6 w-[30vw] h-auto flex flex-col gap-4 items-center transition-transform duration-500 scale-100 opacity-100"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-amber-600/30 mb-4">
                  <img
                    src={service.src}
                    alt={`${service.title} icon`}
                    className="w-6 h-6 rounded-full "
                  />
                </div>
                <h2 className="text-xl font-semibold text-white mb-3 text-center">{service.title}</h2>
                <div className="flex-grow overflow-auto px-2">
                  <p className="text-sm md:text-base text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
            <button onClick={handleNext} aria-label="Next services" className="flex-shrink-0 ">
              <IoMdArrowDroprightCircle className="text-white text-4xl md:text-5xl hover:scale-110 transition-transform" />
            </button>
          </div>



        </div>




        {/* Navigation dots */}
        <div className="hidden lg:flex justify-center mt-6 space-x-2 overflow-x-auto max-w-full px-2 py-1">
          {services.map((_, index) => {
            const isActive =
              (index >= serviceIndex && index < serviceIndex + cardsToShow) ||
              (serviceIndex + cardsToShow > services.length &&
                index < (serviceIndex + cardsToShow) % services.length);

            return (
              <button
                key={index}
                onClick={() => setServiceIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${isActive ? "bg-amber-500 w-4 h-4" : "bg-gray-400"
                  }`}
                aria-label={`Go to service ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Mobile single card */}
        <div className="flex items-center w-full max-w-xl mx-auto gap-2 md:gap-4 px-2 sm:px-4 md:px-10 justify-between lg:hidden">
          <button onClick={() => setServiceIndex((serviceIndex - 1 + services.length) % services.length)} aria-label="Previous service" className="flex-shrink-0">
            <IoMdArrowDropleftCircle className="text-white text-3xl md:text-4xl hover:scale-110 transition" />
          </button>

          <div className="overflow-hidden w-full max-w-[320px]  sm:h-[350px] md:h-auto flex mx-auto items-center justify-center py-4 sm:py-6 md:py-8">
            {services.map((service, index) =>
              index === serviceIndex ? (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="bg-[#5a5a5a] rounded-xl shadow-md w-full border border-[#fafafa] flex flex-col items-center px-4 py-5 sm:py-6 sm:px-6 gap-3 sm:gap-5 transition-transform duration-500 scale-100 opacity-100"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-sm sm:rounded-full bg-amber-600/30 mb-3 sm:mb-4">
                    <img src={service.src} alt={`${service.title} icon`} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h2 className="text-base sm:text-lg font-semibold text-white text-center mb-2 sm:mb-3">
                    {service.title}
                  </h2>
                  <div className="px-1">
                    <p className="text-[10px] sm:text-base text-gray-300 text-center">{service.description}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>




          <button onClick={() => setServiceIndex((serviceIndex + 1) % services.length)} aria-label="Next service" className="flex-shrink-0">
            <IoMdArrowDroprightCircle className="text-white text-3xl md:text-4xl hover:scale-110 transition" />
          </button>
        </div>

        {/* Navigation dots mobile */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2 overflow-x-auto max-w-full px-2 py-1 lg:hidden">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setServiceIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${index === serviceIndex ? "bg-amber-500 w-3 sm:w-4" : "bg-gray-400"
                }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;