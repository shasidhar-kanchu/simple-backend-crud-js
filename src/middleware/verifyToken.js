const jwt = require("jsonwebtoken");
function verifyToken(req, res, next) {
  try {
    const token = req.headers["authorization"];
    if (typeof token === null || typeof token === undefined || !token) {
      throw new Error("Unauthorized access");
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Start Error " + error + " End Error");
    next(error);
  }
}

module.exports = { verifyToken };
