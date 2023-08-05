const userService = require("../services/userService");

async function getUsers(req, res, next) {
  try {
    console.log("get users controller is called");
    res.status(200).json({ message: "get users controller is called" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
}
async function getUserById(req, res, next) {
  try {
    const data = await userService.getUserById(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
}
async function updateUser(req, res, next) {
  try {
    const data = await userService.updateUser(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const data = await userService.deleteUser(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
