// User API Routes for api/users/

const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");
// TODO: Set up controller paths

// ROOT /api/users - GET all users and POST a new user
router.route("/").get(getAllUsers).post(createUser);

// USERID /api/users/:userId - GET one user, PUT user updates, DELETE user
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

// FRIENDS /api/users/:userId/friends/:friendID - POST add friend, DELETE remove friend
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);


module.exports = router;
