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
      minlength: [6, "Password must be atleast 6 character long"],
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

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function (companyId) {
  return jwt.sign(
    {
      id: this._id,
      name: this.name,
      email: this.email,
      company_id: companyId,
      role: this.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};

module.exports = mongoose.model("users", userSchema);
