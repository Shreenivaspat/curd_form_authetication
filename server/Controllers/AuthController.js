const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModal.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User can already exist , you can login" });
    }
    const userModal = new UserModal({ name, email, password });
    userModal.password = await bcrypt.hash(password, 10);
    await userModal.save();
    res.status(201).json({
      message: "signup successfully",
      success: true,
    });
  } catch (error) {
    res.status(500)
    .json({
      message: "server error",
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  signup,
  login,
};
