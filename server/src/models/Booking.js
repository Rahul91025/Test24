import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookingId: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true, maxlength: 80 },
    phone: { type: String, required: true, trim: true, maxlength: 20, index: true },
    address: { type: String, required: true, trim: true, maxlength: 250 },
    service: { type: String, required: true, trim: true, maxlength: 100 },
    description: { type: String, required: true, trim: true, maxlength: 1000 },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
      index: true
    },
    revenue: { type: Number, default: 0, min: 0 },
    completedAt: { type: Date, default: null }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
