import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGDB_URL);
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Connect Database Error:", error);
  }
};

export default connectDB;
