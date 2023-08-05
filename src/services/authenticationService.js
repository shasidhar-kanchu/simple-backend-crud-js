const { getUserByEmail } = require("../services/userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(email, password) {
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      res.status(404).json({ message: "Invalid Email" });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      res.status(400).json({ message: "Password is not valid" });
    }
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 7,
    });
    return token;
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
    console.log(error, "Service");
    if (error.code === "P2002") throw new Error("Email already exists");
  }
}

module.exports = { login, signup };
