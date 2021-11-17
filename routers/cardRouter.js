const router = require("express").Router();
const { selectCard } = require("../controllers/dataController");
const authenticate = require("../middlewares/authenticate");

router.post("/select", authenticate, selectCard);

module.exports = router;
