// controllers/userController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Check if the user exists and the password is correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    // Generate a JWT token for the user
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      process.env.jwt
    );

    // Send the token in the response
    res.json({ token, user: { id: user.id } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const { firstName, lastName, username, email, password, isAdmin } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
        isAdmin,
      },
    });

    // Generate JWT token
    const token = jwt.sign({ userId: newUser.id }, process.env.jwt);

    res.json({ token });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  const userId = parseInt(req.params.id);
  const {
    username,
    email,
    firstName,
    lastName,
    isAdmin,
    oldPassword,
    newPassword,
  } = req.body;

  try {
    // Find the user by ID
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if oldPassword is provided and matches the current hashed password
    if (oldPassword && !(await bcrypt.compare(oldPassword, user.password))) {
      return res.status(401).json({ error: "Old password is incorrect" });
    }

    // Hash the new password if provided
    let hashedNewPassword = user.password; // Default to current password if newPassword not provided
    if (newPassword) {
      hashedNewPassword = await bcrypt.hash(newPassword, 10);
    }

    // Update user data, including password if provided
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        username,
        email,
        firstName,
        lastName,
        isAdmin,
        password: hashedNewPassword, // Update password if newPassword provided
      },
    });

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
