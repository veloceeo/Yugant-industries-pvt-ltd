
import assets from '../assets/asset';

const ContactCard = () => {
    return (
        <div className="py-16 bg-black font-sans overflow-hidden">

            <div className="flex items-center justify-end  mb-10">
                <span className=" text-white  text-4xl sm:text-5xl font-bold shadow-lg transform -rotate-3  ">
                    Cont
                </span>
                <span className="text-4xl sm:text-5xl font-bold bg-[#FFA135] transform -rotate-3  py-3 mb-2 ">act Us</span>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-4 items-center">

                <div className="bg-[#111] p-6 rounded-md shadow-lg w-full max-w-sm space-y-6">
                    <div>
                        <label className="block text-sm mb-2 text-white">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 bg-black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-2 text-white">Phone</label>
                        <input
                            type="text"
                            placeholder="Enter your phone"
                            className="w-full px-4 py-3 bg-black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-2 text-white">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 bg-black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-2 text-white">Message</label>
                        <textarea
                            placeholder="Type a message..."
                            rows="5"
                            className="w-full px-4 py-3 bg-black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none resize-none"
                        ></textarea>
                    </div>
                    <button className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition">
                        Submit
                    </button>
                </div>


                <div className="rounded-md overflow-hidden shadow-lg">
                    <img
                        src={assets.girlSketch}
                        alt="Meeting"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
