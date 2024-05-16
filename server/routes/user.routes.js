const { Router } = require("express");
const { addUser, assignMachine, getAllUsers, getUserById } = require("../controllers/user.controller");
const router = Router();

// router.route("/user/login");

router.route("/users/:userId/assign").put(assignMachine)

router.route("/users").post(addUser)
router.route("/users").get(getAllUsers)
router.route("/users/:email").get(getUserById)

module.exports = router;
