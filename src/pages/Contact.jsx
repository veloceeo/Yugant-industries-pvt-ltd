import React from 'react';
import assets from '../assets/asset'; // adjust path as needed

const Contact = () => {
  return (
    <div className="mx-auto py-16 px-4 max-w-7xl">
      <h2 className="text-white text-3xl font-bold text-center mb-12">Contact With Us</h2>

      <div className="flex flex-col md:flex-row items-center justify-around md:gap-5 lg:gap-0  ">
        {/* Image Section */}
        <div className="w-full md:w-1/2 rounded-md overflow-hidden shadow-lg hidden md:block ">
          <img
            src={assets.girlSketch}
            alt="Meeting"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Contact Form */}
        <form className="w-full md:w-1/2  p-6 rounded-md shadow-lg max-w-md space-y-6 border border-[#5a5a5a] ">
          <div>
            <label htmlFor="name" className="block text-sm mb-2 text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-[#5a5a5a] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 "
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm mb-2 text-white">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone"
              className="w-full px-4 py-3 bg-[#5a5a5a] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 "
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-[#5a5a5a]  border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-2 text-white">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type a message..."
              className="w-full px-4 py-3 bg-[#5a5a5a]  border border-gray-600 rounded-md text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 "
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-slate-200 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
