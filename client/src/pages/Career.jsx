import { useState } from "react";
import axios from "axios";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    post: "",
    experience: "",
    otherDetails: "",
  });

  const [resume, setResume] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading,setLoading]=useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      submissionData.append(key, value);
    }

    submissionData.append("resume", resume); 

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/job-opening`, 
        submissionData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(true)
      

      if (response.data.success) {
        setSuccessMessage("Thanks for applying!");
        setFormData({
          name: "",
          contact: "",
          email: "",
          post: "",
          experience: "",
          otherDetails: "",
        });
        setResume("");
        setLoading(false)

        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setLoading(false)
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-[90%] md:max-w-md lg:max-w-lg mx-auto px-6 py-12 my-20 font-semibold rounded-xl border border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-center text-xl font-bold">
          Job opening in Yugant. Apply Now!
        </h2>

        {successMessage && (
          <div className="text-green-500 text-center">{successMessage}</div>
        )}

        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded focus:outline-none focus:ring-2"
            required
          />
        </div>

        <div>
          <label htmlFor="contact" className="block mb-1">Contact Number</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your number"
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded focus:outline-none focus:ring-2"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded focus:outline-none focus:ring-2"
            required
          />
        </div>

        <div>
          <label htmlFor="post" className="block mb-1">Apply for Which Post?</label>
          <select
            id="post"
            name="post"
            value={formData.post}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded text-gray-400 focus:outline-none focus:ring-2"
            required
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
            value={formData.experience}
            onChange={handleChange}
            placeholder="Experience"
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded mt-2 focus:outline-none focus:ring-2"
            required
          />
        </div>

        <div>
          <label htmlFor="otherDetails" className="block mb-1">Other Details</label>
          <textarea
            id="otherDetails"
            name="otherDetails"
            rows="4"
            value={formData.otherDetails}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded resize-none focus:outline-none focus:ring-2"
          ></textarea>
        </div>

        <div>
          <label htmlFor="resume" className="block mb-3">Upload Your Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="text-[10px] sm:text-base md:text-xl lg:text-lg file:border-white file:border file:rounded file:text-white file:bg-black"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`bg-white text-black font-bold py-2 px-6 rounded transition-all hover:bg-slate-100 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Apply"}
        </button>
      </form>
    </div>
  );
};

export default Career;


