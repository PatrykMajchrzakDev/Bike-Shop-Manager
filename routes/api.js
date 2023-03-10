const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");
const { ensureAuth } = require("../middleware/passport");

router.get("/clients", apiController.getClients);

module.exports = router;
