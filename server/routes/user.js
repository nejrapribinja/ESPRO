const router = require("express").Router();
const userController = require("../controllers/userController");
const verifyRoles = require("../middleware/verifyRoles");
const roles = require("../middleware/roles");

//router.use(verifyRoles([roles.user]));
router.post("/addPost", userController.addPost);

module.exports = { router };
