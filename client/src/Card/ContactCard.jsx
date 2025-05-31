
// import assets from '../assets/asset';
// import { useState } from 'react';

// const ContactCard = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         phone: "",
//         email: "",
//         message: ""
//       });
    
//       const [successMsg, setSuccessMsg] = useState("");
//       const [errorMsg, setErrorMsg] = useState("");
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//       };
    
//       const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         try {
//           const res = await axios.post(
//             `${import.meta.env.VITE_BACKEND_URL}/api/yugantcontact`,
//             formData
//           );
    
//           if (res.data.success) {
//             setSuccessMsg("Contact form submitted successfully.");
//             setErrorMsg("");
//             setFormData({ name: "", phone: "", email: "", message: "" });
    
//             setTimeout(() => setSuccessMsg(""), 5000);
//           }
//         } catch (error) {
//           setErrorMsg("Failed to submit. Please try again.");
//           setSuccessMsg("");
//           setTimeout(() => setErrorMsg(""), 5000);
//         }
//       };
    
//     return (
//         <div className="py-16 bg-black font-sans overflow-hidden">

//             <div className="flex items-center justify-end mb-10 ">
//                 <span className="text-white   text-4xl sm:text-5xl ">
//                     Cont
//                 </span>
//                 <span className=" text-white   text-4xl sm:text-5xl  shadow-lg w-[190px] h-[100px]  flex  items-center justify-start " style={{ backgroundImage: `url(${assets.rectangle56})` }}>
//                     act Us
//                 </span>
//             </div>


//             <div className="mx-auto py-10 px-4 max-w-7xl">

//                 <div className="flex flex-col md:flex-row items-center justify-around md:gap-5 lg:gap-0  ">
//                     {/* Image Section */}


//                     {/* Contact Form */}
//                     <form className="w-full md:w-1/2  p-6 rounded-md shadow-lg max-w-md space-y-6 border border-[#5a5a5a] ">
//                         <div>
//                             <label htmlFor="name" className="block text-sm mb-2 text-white">Name</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 placeholder="Enter your name"
//                                 className="w-full px-4 py-3 bg-[#5a5a5a] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 "
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="phone" className="block text-sm mb-2 text-white">Phone</label>
//                             <input
//                                 type="text"
//                                 id="phone"
//                                 name="phone"
//                                 placeholder="Enter your phone"
//                                 className="w-full px-4 py-3 bg-[#5a5a5a] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 "
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block text-sm mb-2 text-white">Email</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 placeholder="Enter your email"
//                                 className="w-full px-4 py-3 bg-[#5a5a5a]  border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="message" className="block text-sm mb-2 text-white">Message</label>
//                             <textarea
//                                 id="message"
//                                 name="message"
//                                 rows="5"
//                                 placeholder="Type a message..."
//                                 className="w-full px-4 py-3 bg-[#5a5a5a]  border border-gray-600 rounded-md text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 "
//                             ></textarea>
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-slate-200 transition-all"
//                         >
//                             Submit
//                         </button>
//                     </form>
//                     <div className="w-full md:w-1/2 rounded-md overflow-hidden shadow-lg hidden md:block ">
//                         <img
//                             src={assets.girlSketch}
//                             alt="Meeting"
//                             className="w-full h-full object-cover rounded-md"
//                         />
//                     </div>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default ContactCard;
import assets from '../assets/asset';
import { useState } from 'react';
import axios from 'axios'


const ContactCard = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/yugantcontact`,
                formData
            );

            if (res.data.success) {
                setSuccessMsg("Contact form submitted successfully.");
                setErrorMsg("");
                setFormData({ name: "", phone: "", email: "", message: "" });

                setTimeout(() => setSuccessMsg(""), 5000);
            }
        } catch (error) {
            setErrorMsg("Failed to submit. Please try again.");
            setSuccessMsg("");
            setTimeout(() => setErrorMsg(""), 5000);
        }
    };

    return (
        <div className="py-16 bg-black font-sans overflow-hidden">
            <div className="flex items-center justify-end mb-10">
                <span className="text-white text-4xl sm:text-5xl">Cont</span>
                <span
                    className="text-white text-4xl sm:text-5xl shadow-lg w-[190px] h-[100px] flex items-center justify-start"
                    style={{ backgroundImage: `url(${assets.rectangle56})` }}
                >
                    act Us
                </span>
            </div>

            <div className="mx-auto py-10 px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-around md:gap-5 lg:gap-0">
                    {/* Contact Form */}
                    <form
                        className="w-full md:w-1/2 p-6 rounded-md shadow-lg max-w-md space-y-6 border border-[#5a5a5a]"
                        onSubmit={handleSubmit}
                    >
                        {successMsg && <p className="text-green-400">{successMsg}</p>}
                        {errorMsg && <p className="text-red-500">{errorMsg}</p>}

                        <div>
                            <label htmlFor="name" className="block text-sm mb-2 text-white">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[#5a5a5a] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm mb-2 text-white">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[#5a5a5a] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm mb-2 text-white">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[#5a5a5a] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm mb-2 text-white">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Type a message..."
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[#5a5a5a] border border-gray-600 rounded-md text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-slate-200 transition-all"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 rounded-md overflow-hidden shadow-lg hidden md:block">
                        <img
                            src={assets.girlSketch}
                            alt="Meeting"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;

