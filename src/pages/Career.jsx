import React from 'react';

const Career = () => {
  return (
  <div className=" w-[90%]  md:max-w-md lg:max-w-lg mx-auto px-6 py-12  my-20 font-semibold rounded-xl border border-gray-700    ">

      <form className="space-y-6  ">
        <h2 className="text-center text-xl font-bold">Job opening in Yugant. Apply Now!</h2>

        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#FFA135]"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block mb-1">Contact Number</label>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Enter your number"
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#FFA135]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#FFA135]"
          />
        </div>

        <div>
          <label htmlFor="post" className="block mb-1">Apply for Which Post?</label>
          <select
            id="post"
            name="post"
            className="w-full px-4 py-2  bg-black border border-gray-600 rounded text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA135]"
            defaultValue=""
          >
            <option value="" disabled>Select your interest</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <div>
          <input
            type="number"
            name="experience"
            placeholder="Experience"
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-[#FFA135]"
          />
        </div>

        <div>
          <label htmlFor="otherDetails" className="block mb-1">Other Details</label>
          <textarea
            id="otherDetails"
            name="otherDetails"
            rows="4"
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#FFA135]"
          ></textarea>
        </div>

        <div>
          <label htmlFor="resume" className="block mb-1">Upload Your Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            className="text-white file:border-0 file:px-4 file:py-2 file:rounded file:text-black"
          />
        </div>

        <button
          type="submit"
          className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-[#FFA135] transition-all"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default Career;
