const express = require("express");
const router = require("./src/routes/routes.js");
const errorHandler = require("./src/middleware/errorHandler.js");
const { verifyToken } = require("./src/middleware/verifyToken.js");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/", verifyToken, router);
app.use(errorHandler);

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    throw error;
  } else {
    console.log("listening on port " + port);
  }
});
