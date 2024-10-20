const Class = require("../models/Class.js")

const classController = {
    createClass : async (req, res) => {
        try {
            const classes = req.body;
            console.log(req.body)
            const classIds = classes.map(cls => cls.classId);
            const existingClasses = await Class.find({ classId: { $in: classIds } });
            const existingIds = existingClasses.map(cls => cls.classId);
            const newClasses = classes.filter(cls => !existingIds.includes(cls.classId));
            if (newClasses.length === 0) {
                return res.status(400).json({ message: "All classes already exist." });
            }
            const createdClasses = await Class.insertMany(newClasses);
            res.status(201).json(createdClasses);
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
}

module.exports = classController;