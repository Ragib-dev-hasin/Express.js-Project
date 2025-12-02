import express from "express";
import * as userController from "../controllers/userController.js";
const router = express.Router();

// ------------------- User Routes (GET for testing) -------------------

// Create user
router.get("/create-user", (req, res) => {
  const { name, email, password } = req.query;
  userController.createUser({ body: { name, email, password } }, res);
});

// Read user
router.get("/read-user", (req, res) => userController.readUser(req, res));

// Update user
router.get("/update-user", (req, res) => {
  const { id, name, email, password } = req.query;
  userController.updateUser({ body: { id, name, email, password } }, res);
});

// Delete user
router.get("/delete-user", (req, res) => {
  const { id } = req.query;
  userController.deleteUser({ body: { id } }, res);
});

// Get all users
router.get("/all-users", (req, res) => userController.getAllUsers(req, res));

// Get user by ID
router.get("/user/:id", (req, res) => userController.getUserById(req, res));

// Login
router.get("/login", (req, res) => {
  const { email, password } = req.query;
  userController.loginUser({ body: { email, password } }, res);
});

// Logout
router.get("/logout", (req, res) => userController.logoutUser(req, res));

// Change password
router.get("/change-password", (req, res) => {
  const { id, oldPassword, newPassword } = req.query;
  userController.changePassword(
    { body: { id, oldPassword, newPassword } },
    res
  );
});

// Update profile
router.get("/update-profile", (req, res) => {
  const { id, name, email } = req.query;
  userController.updateProfile({ body: { id, name, email } }, res);
});

// Make admin
router.get("/make-admin/:id", (req, res) => userController.makeAdmin(req, res));

// Remove admin
router.get("/remove-admin/:id", (req, res) =>
  userController.removeAdmin(req, res)
);

// Delete account
router.get("/delete-account", (req, res) => {
  const { id } = req.query;
  userController.deleteAccount({ body: { id } }, res);
});

// Search users
router.get("/search", (req, res) => {
  const { q } = req.query;
  userController.searchUsers({ query: { q } }, res);
});

// Filter users
router.get("/filter", (req, res) => {
  const { role, status } = req.query;
  userController.filterUsers({ query: { role, status } }, res);
});

// Block user
router.get("/block-user/:id", (req, res) => userController.blockUser(req, res));

// Unblock user
router.get("/unblock-user/:id", (req, res) =>
  userController.unblockUser(req, res)
);

// Verify email
router.get("/verify-email", (req, res) => {
  const { id, token } = req.query;
  userController.verifyEmail({ body: { id, token } }, res);
});

// Resend verification
router.get("/resend-verification", (req, res) => {
  const { id } = req.query;
  userController.resendVerification({ body: { id } }, res);
});

// Upload profile picture (just simulate)
router.get("/upload-profile-picture", (req, res) => {
  const { id, url } = req.query;
  userController.uploadProfilePicture({ body: { id, url } }, res);
});

export default router;
