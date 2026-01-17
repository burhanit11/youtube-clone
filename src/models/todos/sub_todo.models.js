import mongoose, { Schema } from "mongoose";

const subTodoSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      user: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
