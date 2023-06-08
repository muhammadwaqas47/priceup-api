const mongoose = require("mongoose");

const finishSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required",
      minlength: [3, "Name must be atleast 3 character long"],
    },
    slug: {
      type: String,
      required: "Slug is required",
      minlength: [3, "slug must be atleast 3 character long"],
    },
    image: {
      type: String,
      default: "images/finishes/default.png",
    },
    partNumber: {
      type: String,
      default: "",
    },
    holesNeeded: {
      type: Number,
      required: "Holes value is required",
    },
    cost: {
      type: Number,
      default: 0.0,
    },
    // price: {
    //   type: Number,
    //   default: 0.0,
    // },
    thickness: {
      type: String,
      required: "Thickness value is required",
    },
    status: {
      type: Boolean,
      default: false,
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Company reference is required",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("finishes", finishSchema);
