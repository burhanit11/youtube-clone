import mongoose, { Schema } from "mongoose";

const orderItemsSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Produt",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [orderItemsSchema],
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CENCELED", "DELIVERD"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
