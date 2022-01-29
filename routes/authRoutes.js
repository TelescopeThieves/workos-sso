const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

// got rid of checkAdmin middleware
router.get("/sso/authorize", authController.sso);


module.exports = router;