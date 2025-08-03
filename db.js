import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const CONNECTION = process.env.MONGO_URI;

export const connectDB = async () => {
  if (!CONNECTION) throw new Error("DB_CONNECTION not defined in environment");

  try {
    await mongoose.connect(CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.error("Failed to connect to DB", err);
    throw err;
  }
};
