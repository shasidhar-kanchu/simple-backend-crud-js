const { Router } = require("express");
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { signup, login } = require("../controllers/authenticationController");
const { sampleEntryData } = require("../utils/sampleEntryData");
const userRouter = new Router();
const authRouter = new Router();

authRouter.get("/login", login);
authRouter.post("/signup", signup);

userRouter.get("/", getUsers);
userRouter.get("/sampledata", sampleEntryData);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

module.exports = { userRouter, authRouter };
