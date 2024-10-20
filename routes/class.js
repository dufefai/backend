const classController = require("../controllers/classController.js");
const router = require("express").Router();

router.post("/create", classController.createClass);

module.exports = router;