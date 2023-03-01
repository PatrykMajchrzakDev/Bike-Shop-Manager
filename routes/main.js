const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const authController = require("../controllers/auth");
const dashboardController = require("../controllers/dashboard");
const { ensureAuth } = require("../middleware/passport");
const clientsController = require("../controllers/clients");

//Main Routes
router.get("/", homeController.getIndex);
router.get("/dashboard", ensureAuth, dashboardController.getDashboard);
router.get("/new-client", ensureAuth, dashboardController.newClient);
router.get("/clients", ensureAuth, dashboardController.getClients);

//Client routes
router.post("/createClient", clientsController.addNewClient);
router.put("/updateClient", clientsController.updateClient);

//auth
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/login", authController.postLogin);
router.post("/signup", authController.postSignup);

module.exports = router;
