const router = require("express").Router();
const {
  addNumber,
  getCardNumber,
  addPrice,
  deleteNumber,
} = require("../controllers/InputNumerController");
const authenticate = require("../middlewares/authenticate");

router.post("/add", authenticate, addNumber);
router.put("/addprice/:id", authenticate, addPrice);
router.get("/get", authenticate, getCardNumber);
router.delete("/delete/:id", authenticate, deleteNumber);

module.exports = router;
