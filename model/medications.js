import mongoose from "mongoose";
import { ObjectId } from "bson";

const medicationSchema = new mongoose.Schema({
    medication_name: {
        type: String,
        required: true
    },
    route: {
    type: String,
    enum: ["Oral", "Topical", "Inhalation", "Injection", "IM", "Subcutaneous"],
    message: "{VALUE} is not a valid route of administration",
    required: true,
    },
    purpose: {
        type: String,
    },
    side_effects: {
        type: [String],
    },
    contraindications: {
        type: [String],
    },
    drug_interactions: {
        type: [String],
    },
    nursing_education: {
        type: String,
    },
});

const Medications = mongoose.model("medications", medicationSchema, "medications")

export default Medications