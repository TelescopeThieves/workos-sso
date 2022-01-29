const router = require("express").Router();

const getRoutes = require("./getRoutes");
const authRoutes = require("./authRoutes");

router.use("/get", getRoutes);
router.use("/auth", authRoutes);

module.exports = router;