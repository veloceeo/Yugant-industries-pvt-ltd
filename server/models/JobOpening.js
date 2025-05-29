import mongoose from "mongoose";

const jobOpeningSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  post: { type: String, required: true },
  experience: { type: String, required: true },
  otherDetails: { type: String },
  resume: { type: String, required: true }, // local file path
  createdAt: { type: Date, default: Date.now }
});

const JobOpening = mongoose.models.JobOpening || mongoose.model("JobOpening", jobOpeningSchema);
export default JobOpening;
