import mongoose from "mongoose";
import { ObjectId } from "bson";

const outsideClinicSchema = new mongoose.Schema({});

const patientSchema = new mongoose.Schema({
  patient_id: {
    type: Number,
    required: true,
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
    type: String,
    required: true,
  },

  admission_date: {
    type: String,
    required: true,
  },
  foster_parent_name: {
    type: String,
    required: true,
  },
  fp_address: {
    type: String,
    required: true,
  },
  fp_telephone: {
    type: Number,
    required: true,
  },
  fp_email: {
    type: String,
  },
  program: {
    type: String,
    enum: [
      "Medical Foster Care",
      "Therapeutic Family Foster Care",
      "Family Foster Care",
    ],
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
    enum: [
      "Bronx",
      "Manhattan",
      "Queens",
      "Westchester",
      "Brooklyn",
      "Long Island",
      "Staten Island",
    ],
    message: "{VALUE} is not a valid geographical location",
    required: true,
  },
  main_brightPath_clinic: {
    type: String,
    enum: [
      "Bronx Clinic",
      "Harlem Clinic",
      "Brooklyn Clinic",
      "Staten Island Clinic",
    ],
    message: "{VALUE} is not a valid clinic",
    required: true,
  },
  outside_clinic: {
    type: outsideClinicSchema,
  },
  outside_clinic_name: {
    type: String,
  },
  outside_primary_care_provider: {
    type: String,
  },
  outside_clinic_address: {
    type: String,
  },
  outside_clinic_telephone: {
    type: String,
  },
  outside_clinic_email: {
    type: String,
  },
});

patientSchema.index({ geographical_location: 1 });
patientSchema.index({ program_location: 1 });
patientSchema.index({ main_brightPath_clinic: 1 });

const Patients = mongoose.model("patients", patientSchema, "patients");

export default Patients;
