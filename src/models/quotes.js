const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    layout_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Layout reference is required",
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Company reference is required",
    },
    creator_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Creator reference is required",
    },
    hardwareFinishes: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    handles: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    hinges: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    mounting: {
      clamps: {
        wallClamp: {
          type: {
            type: mongoose.Schema.Types.ObjectId,
            default: null,
          },
          count: {
            type: Number,
            default: 0,
          },
        },
        sleeveOver: {
          type: {
            type: mongoose.Schema.Types.ObjectId,
            default: null,
          },
          count: {
            type: Number,
            default: 0,
          },
        },
        glassToGlass: {
          type: {
            type: mongoose.Schema.Types.ObjectId,
            default: null,
          },
          count: {
            type: Number,
            default: 0,
          },
        },
      },
      channel: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
    },
    glassType: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
      thickness: {
        type: String,
        default: "",
      },
    },
    slidingDoorSystem: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    header: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    glassTreatment: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    outages: {
      type: Number,
      default: 0,
    },
    transom: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    people: {
        type: Number,
        default: 0,
      },
    hours: {
        type: Number,
        default: 0,
      },
    measurements: {
      type: Number,
      default: 2,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("quotes", quoteSchema);
