const Course = require("../models/Course.js")

const courseController = {
    createCourse : async (req, res) => {
        try {
            const courses = req.body;
            console.log(req.body)
            const ids = courses.map(course => course.id);
            const existingCourses = await Course.find({ id: { $in: ids } });
            const existingIds = existingCourses.map(course => course.id);
            const newCourses = courses.filter(course => !existingIds.includes(course.id));
            console.log(newCourses)
            if (newCourses.length === 0) {
                return res.status(400).json({ message: "All courses already exist." });
            }
            const createdCourses = await Course.insertMany(newCourses);
            res.status(201).json(createdCourses);
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
}

module.exports = courseController;
