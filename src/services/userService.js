const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getUsers() {
  try {
    const response = await prisma.user.findMany({
      include: {
        userData: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
async function getUserById(id) {
  try {
    const response = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        userData: true,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const response = await prisma.user.findUniqueOrThrow({
      where: {
        email,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

async function updateUser(id, data) {
  try {
    const response = await prisma.user.update({
      select: {
        fullName: true,
        email: true,
        userData: {
          select: { description: true, age: true, gender: true },
        },
      },
      where: {
        id,
      },
      data: {
        userData: {
          upsert: {
            create: data,
            update: data,
          },
        },
      },
    });
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
async function deleteUser(id) {
  try {
    const response = await prisma.user.delete({
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

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
};
