
import assets from '../assets/asset';
import { Link } from 'react-router-dom';

const AboutUsCard = () => {
    return (
        <div className='mt-10  py-10  ' >

            <div className="flex items-center  mb-10">
                <span className="bg-[#FFA135] text-white  py-3 transform -rotate-3 text-4xl sm:text-5xl font-bold shadow-lg">
                    About
                </span>
                <span className="text-4xl sm:text-5xl font-bold   transform -rotate-3 mb-2 ">Us</span>
            </div>

            <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 mb-10  mx-auto px-10 ">
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


            <div className="text-center py-5">
                <Link
                    to="/about"
                    className="bg-white text-black px-7 py-2 rounded-md shadow  hover:bg-slate-200 transition"
                >
                    More
                </Link>
            </div>
        </div>
    );
};

export default AboutUsCard;