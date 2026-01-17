import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    avatar: {
      types: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Passward is requored."],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
