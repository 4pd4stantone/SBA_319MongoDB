import Mongoose from "mongoose";
import "dotenv/config";

const connectionString = process.env.ATLAS_URI;

const db = await Mongoose.connect(connectionString);

export default db;