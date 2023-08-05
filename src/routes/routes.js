const { Router } = require("express");
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { signup, login } = require("../controllers/authenticationController");
const router = Router();

router.get("/user/login", login);
router.post("/user/signup", signup);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
