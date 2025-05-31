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
  const [loading, setLoading] = useState(false);

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
    setLoading(true); // Start loading

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
        setResume(null);

        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading after try/catch
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

        {/* ... all input fields unchanged ... */}

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


