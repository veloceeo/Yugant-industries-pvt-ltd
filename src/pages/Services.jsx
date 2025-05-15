import React from 'react';
import assets from '../assets/asset';

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
  return (
    <div className="bg-black py-12 px-6 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-10">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#2b2b2b] rounded-xl shadow-md px-5 py-6 w-[300px] h-[360px] flex flex-col justify-between"
          >
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-amber-600/30">
                <img src={service.src} alt="icon" className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-semibold text-white">
                {service.title}
              </h2>
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
  );
};

export default Services;

