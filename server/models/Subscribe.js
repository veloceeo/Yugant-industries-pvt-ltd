import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema({
  email: { type: String, required: true }
});
const Subscribe=mongoose.models.subscribe||mongoose.model("subscribe",subscribeSchema)


export default Subscribe