function verifyToken(req, res, next) {
  try {
    const token = req.headers["authorization"];
    if (token !== null || token !== undefined) {
      res.status(401).json({ message: "Unauthorized access" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { verifyToken };
