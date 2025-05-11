const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
//   const auth = req.headers("authorization");
  const auth = req.headers.authorization;

  if (!auth) {
    return res
      .status(403)
      .json({ message: "unAuthorized , JWT Token is required" });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_TOKEN);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT verification error:", err); // internal logging
    return res
      .status(403)
      .json({ message: "Unauthorized: Invalid or expired token." });
  }
};

module.exports = ensureAuthenticated;
