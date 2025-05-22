
import assets from '../assets/asset';
import { Link } from 'react-router-dom';

const AboutUsCard = () => {
    return (
        <div className='  py-10 ' >

            <div className="flex items-center  mb-10">
                <span className=" text-white   text-4xl sm:text-5xl  shadow-lg w-[190px] h-[100px]  flex  items-center justify-end  " style={{ backgroundImage: `url(${assets.rectangle56})` }} >
                    About
                </span>
                <span className="text-4xl sm:text-5xl  ">Us</span>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-20  mb-10  ">
                {/* Image */}
                <div className="w-full md:w-1/2 flex md:justify-end justify-center   ">
                    <img
                        src={assets.board}
                        alt="About Us"
                        className="rounded-lg shadow-lg object-cover w-full max-w-[300px] sm:max-w-lg md:max-w-xl lg:max-w-3xl h-56 sm:h-72 md:h-96 lg:h-[480px]"
                    />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-gray-300 px-2 flex flex-col justify-center items-center md:justify-start md:items-start  ">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 ">
                        Next-Generation Enterprises
                    </h2>
                    <p className="text-[#5a5a5a] text-base sm:text-lg md:text-xl w-[70%] leading-relaxed">
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