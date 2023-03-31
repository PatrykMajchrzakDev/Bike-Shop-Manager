const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");
const { ensureAuth } = require("../middleware/passport");
const mainController = require("../controllers/main");

// CLIENTS ROUTES
router.get("/clients", apiController.getClients);
router.get("/clickedOrderInfo/:id", apiController.getClickedOrderInfo);

// ORDERS ROUTES

router.get("/getListOfOrders", ensureAuth, apiController.getOrders);
module.exports = router;
