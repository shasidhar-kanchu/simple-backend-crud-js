const auth = require("../services/authenticationService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const data = await auth.login(email, password);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

async function signup(req, res, next) {
  try {
    const { fullName, email, password } = req.body;
    const data = await auth.signup(fullName, email, password);
    res.status(201).json({
      message:
        "Signup Success! Now you can login with email and password to authenticate",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { login, signup };
