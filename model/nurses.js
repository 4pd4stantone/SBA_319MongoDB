import mongoose from "mongoose";
import { ObjectId } from "bson";

const nursingLicenseSchema = new mongoose.Schema({
  license_number: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  expiration_date: {
    type: String,
    required: true,
  }
});

const nurseSchema = new mongoose.Schema({
    nurse_id: {
        type: Number,
        required: true
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: "Nurse Case Manager",
    },
    nursing_license: {
        type: nursingLicenseSchema,
        required: true,
    }, 
    level_of_education: {
        type: String,
        required: true,
    },
    years_of_experience: {
        type: Number,
    },
    date_hired: {
        type: String,
    },
    team: {
        type: String,
        enum: ["Bronx Team", "Brooklyn Team"], //Bronx Coverage = Bronx + Westchester. Brooklyn Coverage = Brooklyn + Staten Island + Long Island + Queens + Manhattan.
        message: "{VALUE} is not a valid team name",
        required: true,
    },
    geographical_area_covered: {
        type: [String],
        enum: ["Bronx", "Manhattan", "Queens", "Westchester", "Brooklyn", "Long Island", "Staten Island"],
        message: "{VALUE} is not a valid geographical area covered",
        required: true,
    },
    schedule: {
        type: String,
        enum: ["8am-4pm", "9am-5pm", "10am-6pm"],
        message: "{VALUE} is not a valid schedule",
        required: true,
    },
    telephone: {
        type: String,
    },
    email: {
        type: String,
    }
});

const Nurses = mongoose.model("nurses", nurseSchema, "nurses")

export default Nurses