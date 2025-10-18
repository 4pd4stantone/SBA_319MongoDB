import mongoose from "mongoose";
import { ObjectId } from "bson";

const fosterParentInfoSchema = new mongoose.Schema({
  foster_parent_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
  }
});

const outsideClinicSchema = new mongoose.Schema({
  clinic_name: {
    type: String,
  },
  primary_care_provider: {
    type: String,
  },
  address: {
    type: String,
    default: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
  }
});

const patientSchema = new mongoose.Schema({
    patient_id: {
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
    sex: {
        type: String,
        enum: ["Male", "Female"],
        message: "{VALUE} is not a valid sex",
        required: true,
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    
    admission_date: {
        type: Date,
        required: true
    },
    foster_parent_info: {
        type: fosterParentInfoSchema,
    },
    program: {
        type: String,
        enum: ["Medical Foster Care", "Therapeutic Family Foster Care", "Family Foster Care"],
        message: "{VALUE} is not a valid program",
        required: true,
    },
    nurse_id: {
        type: Number,
        required: true,
    },
    diagnoses: {
        type: [String],
    }, 
    medication_list: {
        type: [String],
    },
    discharge_date: {
        type: Date,
    },
    program_location: {
        type: String,
        enum: ["Bronx", "Brooklyn"],
        message: "{VALUE} is not a valid program location",
        required: true,
    },
    geographical_location: {
        type: String,
        enum: ["Bronx", "Manhattan", "Queens", "Westchester", "Brooklyn", "Long Island", "Staten Island"],
        message: "{VALUE} is not a valid geographical location",
        required: true,
    },
    main_brightPath_clinic: {
        type: String,
        enum: ["Bronx Clinic", "Harlem Clinic", "Brooklyn Clinic", "Staten Island Clinic"],
        message: "{VALUE} is not a valid clinic",
        required: true,
    },
    outside_clinic: {
        type: outsideClinicSchema,
    },
});

patientSchema.index({ geographical_location: Number });
patientSchema.index({ program_location: Number });
patientSchema.index({ main_brightPath_clinic: Number })

const Patients = mongoose.model("patients", patientSchema, "patients")

export default Patients