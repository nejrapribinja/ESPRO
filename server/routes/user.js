const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/addPost", userController.addPost);
router.get("/getUserPosts", userController.getUserPosts);
router.post("/editPost", userController.editPost);

module.exports = { router };
