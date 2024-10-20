const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const courseRouter = require("./routes/course");
const classRouter = require("./routes/class");
const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({error: "Bad JSON"});
    }
    next(err);
  });

//routes
app.use("/course", courseRouter);
app.use("/class", classRouter);

const hostname = 'localhost'
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server http://${hostname}:${port}/`)
})