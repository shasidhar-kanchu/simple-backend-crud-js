function errorHanlder(error, req, res, next) {
  if (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = errorHanlder;
