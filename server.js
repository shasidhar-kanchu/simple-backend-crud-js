const express = require("express");
const { userRouter, authRouter } = require("./src/routes/routes.js");
const errorHandler = require("./src/middleware/errorHandler.js");
const { verifyToken } = require("./src/middleware/verifyToken.js");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(
  "/user",
  (req, res, next) => {
    console.log("/user auth router");
    next();
  },
  authRouter
);
app.use("/users", verifyToken, userRouter);
app.use(errorHandler);
app.use("*", (req, res) => {
  res.status(404).json({ message: "invalid API call" });
});
app.listen(port, (error) => {
  if (error) {
    console.log(error);
    throw error;
  } else {
    console.log("listening on port " + port);
  }
});
