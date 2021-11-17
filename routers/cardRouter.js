const router = require("express").Router();
const { selectCard, getCardData } = require("../controllers/dataController");
const authenticate = require("../middlewares/authenticate");

router.get("/get", authenticate, getCardData);
router.post("/select", authenticate, selectCard);

module.exports = router;
