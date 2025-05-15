
import assets from '../assets/asset'

const About = () => {
  return (
    <div className='mt-10  flex-col flex' >
      <div className="flex flex-col  md:flex-row justify-between mx-auto gap-10 items-center  mb-10  px-10 ">
        <div>
          <img
            src={assets.board}
            alt="AboutUs"
            className="rounded-lg shadow-lg max-w-sm w-full h-sm"
          />
        </div>
        <div className="max-w-xl text-gray-300 text-base md:text-lg px-2">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Next-Generation Enterprises
          </h2>
          <p className='text-[#5a5a5a]' >
            Yugant Industries Pvt. Ltd. is a next-generation, innovation-first Indian enterprise that operates at the intersection of technology, commerce, intelligence, and digital strategy. Headquartered in India, Yugant Industries was founded with a bold vision: to build a multi-sectoral powerhouse that not only creates value across verticals but also shapes the future of how businesses operate in a digitally connected world.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mx-auto gap-10 items-center  mb-10  px-10  ">

        <div className="max-w-xl text-gray-300 text-base md:text-lg px-2">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Our Business Model
          </h2>
          <p className='text-[#5a5a5a]' >
            We are not just a tech company; we are an
            ecosystem of possibilities. Our business model
            spans across E-commerce, Q-commerce,
            Software & App Development, Information
            Technology, Artificial Intelligence, and Digital
            Marketing — each vertical tightly integrated with
            a unified goal: to deliver impactful, scalable, and
            intelligent solutions that solve real-world
            problems.
          </p>
        </div>
        <div>
          <img
            src={assets.girlSketch}
            alt="AboutUs"
            className="rounded-lg shadow-lg max-w-sm w-full h-sm"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mx-auto gap-10 items-center  mb-10  px-10 ">
        <div>
          <img
            src={assets.board}
            alt="AboutUs"
            className="rounded-lg shadow-lg max-w-sm w-full h-sm"
          />
        </div>
        <div className="max-w-xl text-gray-300 text-base md:text-lg px-2">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Ideology
          </h2>
          <p className='text-[#5a5a5a]' >
            What sets Yugant Industries apart is our "region
            first" ideology, where we approach every product
            and platform with a hyperlocal lens, enabling us
            to build deeply rooted, culturally attuned, and
            economically sustainable ecosystems —
            particularly in Tier-II and Tier-III cities that are
            often ignored by traditional models.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mx-auto gap-10 items-center  mb-10  px-10 ">

        <div className="max-w-xl text-gray-300 text-base md:text-lg px-2">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Our Team
          </h2>
          <p className='text-[#5a5a5a]' >
            Our team comprises visionary engineers, AI
            scientists, marketers, developers, and strategists
            working in synergy to break conventional
            boundaries. We use cutting-edge technologies
            like cloud computing, microservices, machine
            learning, predictive algorithms, and cybersecurity
            frameworks to fuel business outcomes.
          </p>
        </div>
        <div>
          <img
            src={assets.team}
            alt="AboutUs"
            className="rounded-lg shadow-lg max-w-sm w-full h-sm"
          />
        </div>
      </div>
       <div className="flex flex-col md:flex-row justify-between mx-auto gap-10 items-center  mb-10  px-10 ">
        <div>
          <img
            src={assets.board}
            alt="AboutUs"
            className="rounded-lg shadow-lg max-w-sm w-full h-sm"
          />
        </div>
        <div className="max-w-xl text-gray-300 text-base md:text-lg px-2">
          <p className='text-[#5a5a5a]' >
        Over time, we have not only delivered industry
defining products but also established ourselves 
as a trusted enabler of growth for businesses, 
creators, entrepreneurs, and communities. As a 
company, we are obsessed with innovation, 
committed to integrity, and driven by purpose.
 At Yugant Industries, we’re building more than 
technology — we’re shaping the new industrial 
revolution powered by intelligence, speed, and 
human relevance.
          </p>
        </div>
      </div>

    </div>
  )
}

export default About