import assets from '../assets/asset';

const sections = [
  {
    title: "Next-Generation Enterprises",
    text: "Yugant Industries Pvt. Ltd. is a next-generation, innovation-first Indian enterprise that operates at the intersection of technology, commerce, intelligence, and digital strategy. Headquartered in India, Yugant Industries was founded with a bold vision: to build a multi-sectoral powerhouse that not only creates value across verticals but also shapes the future of how businesses operate in a digitally connected world.",
    image: assets.board,
  },
  {
    title: "Our Business Model",
    text: "We are not just a tech company; we are an ecosystem of possibilities. Our business model spans across E-commerce, Q-commerce, Software & App Development, Information Technology, Artificial Intelligence, and Digital Marketing — each vertical tightly integrated with a unified goal: to deliver impactful, scalable, and intelligent solutions that solve real-world problems.",
    image: assets.girlSketch,
  },
  {
    title: "Ideology",
    text: "What sets Yugant Industries apart is our \"region first\" ideology, where we approach every product and platform with a hyperlocal lens, enabling us to build deeply rooted, culturally attuned, and economically sustainable ecosystems — particularly in Tier-II and Tier-III cities that are often ignored by traditional models.",
    image: assets.board,
  },
  {
    title: "Our Team",
    text: "Our team comprises visionary engineers, AI scientists, marketers, developers, and strategists working in synergy to break conventional boundaries. We use cutting-edge technologies like cloud computing, microservices, machine learning, predictive algorithms, and cybersecurity frameworks to fuel business outcomes.",
    image: assets.team,
  },
  {
    title: null,
    text: "Over time, we have not only delivered industry-defining products but also established ourselves as a trusted enabler of growth for businesses, creators, entrepreneurs, and communities. As a company, we are obsessed with innovation, committed to integrity, and driven by purpose. At Yugant Industries, we’re building more than technology — we’re shaping the new industrial revolution powered by intelligence, speed, and human relevance.",
    image: assets.board,
  },
];

const About = () => {
  return (
    <div className="mt-20 mb-20 flex flex-col justify-between items-center  ">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between items-center  md:justify-start  gap-y-10 md:gap-x-10 mb-16 px-4 md:px-6 w-full max-w-screen-3xl"
        >
          {(index % 2 === 0 || section.title === null) ? (
            <>
              {/* Image on left */}
              <div className="w-full md:w-1/2 flex justify-center   ">
                <img
                  src={section.image}
                  alt={`Section ${index + 1}`}
                  className="rounded-lg shadow-lg object-cover w-full max-w-lg md:max-w-2xl lg:max-w-5xl h-60 sm:h-80 md:h-[400px] lg:h-[500px]"
                />
              </div>

              {/* Text on right */}
              <div className="w-full md:w-1/2 px-2 text-center md:text-left  flex flex-col justify-center items-center  text-gray-300">
                {section.title && (
                  <h2 className="text-3xl  md:text-4xl lg:text-5xl font-semibold text-white mb-4 text-left self-start  ">
                    {section.title}
                  </h2>
                )}
                <p className="text-[#5a5a5a] text-lg sm:text-xl md:text-2xl leading-relaxed max-w-[100%]">
                  {section.text}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Text on left */}
              <div className="w-full md:w-1/2  text-center md:text-left  flex flex-col justify-center items-center text-gray-300">
              
                  <h2 className="text-3xl  md:text-4xl  lg:text-5xl font-semibold  text-white mb-4  text-left self-start  ">
                  {section.title}
                </h2>
             
                <p className="text-[#5a5a5a] text-lg sm:text-xl md:text-2xl  max-w-[100%]  text-loose  ">
                  {section.text}
                </p>
              </div>

              {/* Image on right */}
              <div className="w-full md:w-1/2 flex justify-center ">
                <img
                  src={section.image}
                  alt={`Section ${index + 1}`}
                  className="rounded-lg shadow-lg object-cover w-full max-w-lg md:max-w-2xl lg:max-w-5xl h-60 sm:h-80 md:h-[400px] lg:h-[500px]"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default About;

