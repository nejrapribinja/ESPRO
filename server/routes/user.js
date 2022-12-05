const router = require("express").Router();
const user = require("../controllers/userController");
const verifyRoles = require("../middleware/verifyRoles");
const roles = require("../middleware/roles");

router.use(verifyRoles([roles.user]));

router.post("/addPost", user.addPost);

module.exports = { router };
