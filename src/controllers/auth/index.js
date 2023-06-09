exports.login = (req, res) => {
  const { email, password } = req.body;
  try {
    Users.findOne({ Email: email }, async (err, user) => {
      if (err) {
        res.send(err);
      } else if (!user) {
        res.status(400).json({
          error: "Email not Registered. Please Sign Up!",
        });
      } else {
        if (user.comparePassword(password) && user.status) {
          res.status(200).json({
            message: "Token Created",
            token: user.generateJwt(),
          });
        } else if (user.comparePassword(password) && !user.isVerified) {
          // sent OTP to verify
          await UserVerfication.deleteMany({ userId: user._id });
          sendVerficationEmail(
            { _id: user._id, Email: email, Name: user.Name },
            res
          );
        } else {
          res.status(400).json({
            error: "Incorrect Password",
          });
        }
      }
    });
  } catch (e) {
    res.status(400).json(e);
  }
};
