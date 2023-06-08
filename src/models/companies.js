const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "GCS",
    },
    image: {
      type: String,
      default: "images/others/company_default.jpg",
    },
    address: {
      type: String,
      default: "",
    },
    miscPricing: {
      pricingFactor: {
        type: Number,
        default: 2.42,
      },
      hourlyRate: {
        type: Number,
        default: 72,
      },
      pricingFactorStatus: {
        type: Boolean,
        defautl: true,
      },
    },
    fabricatingPricing: [
      {
        label: {
          type: String,
          default: "1 Hole (1/2in Glass)",
        },
        value: {
          type: Number,
          default: 7.74,
        },
      },
      {
        label: {
          type: String,
          default: "1 Hole (3/8in Glass)",
        },
        value: {
          type: Number,
          default: 6.9,
        },
      },
      {
        label: {
          type: String,
          default: "Clamp Cutout (1/2in)",
        },
        value: {
          type: Number,
          default: 11.61,
        },
      },
      {
        label: {
          type: String,
          default: "Clamp Cutout (3/8in)",
        },
        value: {
          type: Number,
          default: 10.79,
        },
      },
      {
        label: {
          type: String,
          default: "Hinge Cutout (1/2in)",
        },
        value: {
          type: Number,
          default: 15.48,
        },
      },
      {
        label: {
          type: String,
          default: "Hinge Cutout (3/8in)",
        },
        value: {
          type: Number,
          default: 12.89,
        },
      },
      {
        label: {
          type: String,
          default: "Miter (1/2in)",
        },
        value: {
          type: Number,
          default: 0.62,
        },
      },
      {
        label: {
          type: String,
          default: "Miter (3/8in)",
        },
        value: {
          type: Number,
          default: 0.55,
        },
      },
      {
        label: {
          type: String,
          default: "Notch (1/2in)",
        },
        value: {
          type: Number,
          default: 24.51,
        },
      },
      {
        label: {
          type: String,
          default: "Notch (3/8in)",
        },
        value: {
          type: Number,
          default: 21.88,
        },
      },
      {
        label: {
          type: String,
          default: "Outage (1/2in)",
        },
        value: {
          type: Number,
          default: 6,
        },
      },
      {
        label: {
          type: String,
          default: "Outage (3/8in)",
        },
        value: {
          type: Number,
          default: 6,
        },
      },
      {
        label: {
          type: String,
          default: "Polish Price per Inch (1/2in)",
        },
        value: {
          type: Number,
          default: 0.16,
        },
      },
      {
        label: {
          type: String,
          default: "Polish Price per Inch (3/8in)",
        },
        value: {
          type: Number,
          default: 0.13,
        },
      },
    ],
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("companies", companySchema);
