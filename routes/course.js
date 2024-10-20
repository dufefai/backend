const courseController = require("../controllers/courseController.js");
const router = require("express").Router();

router.post("/create", courseController.createCourse);

module.exports = router;