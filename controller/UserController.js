// controllers/userController.js

const prisma = require('../prisma'); // Assuming you have Prisma initialized in a separate file

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const { username, email, firstName, lastName, isAdmin } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        firstName,
        lastName,
        isAdmin,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  const userId = parseInt(req.params.id);
  const { username, email, firstName, lastName, isAdmin } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        username,
        email,
        firstName,
        lastName,
        isAdmin,
      },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    await prisma.user.delete({
      where: { id: userId },
    });
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
