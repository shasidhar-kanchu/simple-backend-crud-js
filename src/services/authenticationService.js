const { getUserByEmail } = require("../services/userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function login(email, password) {
  try {
    console.log(email, password);

    const user = await getUserByEmail(email);
    console.log(user);
    if (!user) {
      throw new Error("Invalid Email");
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error("Password is not valid");
    }
    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 7,
    });
    return { token, Id: user.id };
  } catch (error) {
    throw error;
  }
}

async function signup(fullName, email, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });
    return user;
  } catch (error) {
    console.log("Service Start ", error.message, "Service");
    if (error.code === "P2002") throw new Error("Email already exists");
    else throw error;
  }
}

module.exports = { login, signup };
