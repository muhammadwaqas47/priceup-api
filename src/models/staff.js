const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required",
      minlength: [3, "Name must be atleast 3 character long"],
    },
    email: {
      type: String,
      required: "Email is required",
      match: /.+\@.+\..+/,
      unique: true,
    },
    image: {
      type: String,
      default: "images/staff/default.jpg",
    },
    password: {
      type: String,
      required: "Password is required",
      minlength: [8, "Password must be atleast 8 character long"],
    },
    status: {
      type: Boolean,
      default: true,
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Company reference is required",
    },
  },
  { timestamps: true }
);
staffSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  // bcrypt.genSalt(10, async (err, salt) => {
  this.password = await bcrypt.hash(this.password, 10);
  next(); /*, (err, hash) => {
            //  console.log("In pre function ",this.Password);
              this.Password = hash;
             // this.saltSecret = salt;
              
          });*/
  //  });
});

module.exports = mongoose.model("staff", staffSchema);
