const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getUsers() {
  try {
    const response = await prisma.user.findMany();
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
async function getUserById(id) {
  try {
    const response = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const response = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

async function updateUser(id, ...data) {
  try {
    const response = await prisma.user.update({
      where: {
        id,
      },
      data,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
async function addUser(req, res, next) {
  try {
    const response = await prisma.user.findMany();
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
async function deleteUser(req, res, next) {
  try {
    const response = await prisma.user.findMany();
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  addUser,
  deleteUser,
};
