const mongoose = require("mongoose");

const estimateSchema = new mongoose.Schema(
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
      required: "Hardware reference is required",
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
      activeType: {
        type: String,
        default: "clamps",
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
    addOns: [
      {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
    ],
    sleeveOverCount: {
      type: Number,
      default: 0,
    },
    towelBarsCount: {
      type: Number,
      default: 0,
    },
    oneInchHoles: {
      type: Number,
      default: 0,
    },
    hingeCut: {
      type: Number,
      default: 0,
    },
    clampCut: {
      type: Number,
      default: 0,
    },
    notch: {
      type: Number,
      default: 0,
    },
    outages: {
      type: Number,
      default: 0,
    },
    mitre: {
      type: Number,
      default: 0,
    },
    polish: {
      type: Number,
      default: 0,
    },
    // transom: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   default: null,
    // },
    people: {
      type: Number,
      default: 0,
    },
    hours: {
      type: Number,
      default: 0,
    },
    measurements: [
      {
        key: {
          type: String,
          default: "",
        },
        value: {
          type: String,
          default: "",
        },
      },
    ],
    cost: {
      type: Number,
      required: "Total Cost is required",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("estimates", estimateSchema);
