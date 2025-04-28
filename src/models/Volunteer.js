import mongoose from "mongoose";

// Definindo o esquema do voluntário
const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    interestArea: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Volunteer", volunteerSchema);