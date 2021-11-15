const router = require("express").Router();
const {
  register,
  login,
  getUser,
  updateUser,
  getMyAccount,
  deleteUser,
} = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");

router.post("/register", register);
router.post("/login", login);
router.get("/get", authenticate, getUser);
router.get("/getmyaccount", authenticate, getMyAccount);
router.put("/edit", authenticate, updateUser);
router.delete("/delete/:email", authenticate, deleteUser);

module.exports = router;
