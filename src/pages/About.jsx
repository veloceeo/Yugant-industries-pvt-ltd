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
    <div className="mt-20 flex flex-col justify-center mb-20  ">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between items-center mx-auto gap-10 mb-10 px-6 md:px-10"
        >
          {/* Alternate layout: image left/right based on index */}
          {(index % 2 === 0 || section.title === null) ? (
            <>
              <div>
                <img
                  src={section.image}
                  alt="AboutUs"
               
                   className="rounded-lg shadow-lg object-cover  h-48 md: lg:h-80 w-[300px] md:w-[600px]  "
                />
              </div>
              <div className="max-w-xl text-gray-300 text-base md:text-lg px-2">
                {section.title && (
                  <h2 className="text-2xl font-semibold text-white mb-3">
                    {section.title}
                  </h2>
                )}
                <p className="text-[#5a5a5a]">
                  {section.text}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="max-w-xl text-gray-300 text-base md:text-lg px-2">
                <h2 className="text-2xl font-semibold text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-[#5a5a5a]">
                  {section.text}
                </p>
              </div>
              <div>
                <img
                  src={section.image}
                  alt="AboutUs"
                 className="rounded-lg shadow-lg object-cover  h-48 md: lg:h-80 w-[300px] md:w-[600px]  "
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

