function errorHanlder(error, req, res, next) {
  if (error.message === "Invalid Email") {
    res.status(404).json({ error: "Invalid Email" });
  } else if (error.message === "Password is not valid") {
    res.status(400).json({ error: "Password is not valid" });
  } else if (error.message === "Unauthorized access") {
    res.status(401).json({ error: "Unauthorized access" });
  } else if (error.message === "Invalid Credentials") {
    res.status(400).json({ error: "Please provide valid fields" });
  } else if (error.name === "PrismaClientValidationError") {
    res.status(400).json({ error: "Invalid Client Credentials" });
  } else {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = errorHanlder;
