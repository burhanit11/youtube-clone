import mongoose, { Schema } from "mongoose";

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonsedWith: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    addmittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
