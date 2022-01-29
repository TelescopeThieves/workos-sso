const express = require("express");
const router = express.Router();
const getController = require("../controllers/get");

router.get("/getProfile/:code", getController.getProfile);


module.exports = router;