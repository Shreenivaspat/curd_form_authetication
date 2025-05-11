const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModal = require("../models/user");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModal.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User can already exist , you can login",
        success: false,
      });
    }
    const userModal = new UserModal({ name, email, password });
    userModal.password = await bcrypt.hash(password, 10);
    await userModal.save();
    res.status(201).json({
      message: "signup successfully",
      success: true,
    });
  } catch (error) {
    console.error("Signup error:", error); // <-- ADD THIS
    res.status(500).json({
      message: "server error",
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModal.findOne({ email });
    const errorMessage = "Auth failed email or password is wrong";
    if (!user) {
      return res.status(403).json({ message: errorMessage, success: false });
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      if (!user) {
        return res.status(403).json({ message: errorMessage, success: false });
      }
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_TOKEN,
      { expiresIn: "24h" }
    );
    res.status(200).json({
      message: "login success",
      success: true,
      jwtToken,
      email,
    });
  } catch (error) {
    console.error("Signup error:", error); // <-- ADD THIS
    res.status(500).json({
      message: "server error",
      success: false,
    });
  }
};

module.exports = {
  signup,
  login,
};
