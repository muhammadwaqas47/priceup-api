const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
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
    password: {
      type: String,
      required: "Password is required",
      minlength: [8, "Password must be atleast 8 character long"],
    },
    role: {
      type: String,
      default: "admin",
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
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

userSchema.methods.generateJwt = function () {
  return jwt.sign(
    { id: this._id, name: this.name, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};

module.exports = mongoose.model("users", userSchema);
