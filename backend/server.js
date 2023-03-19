const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});


const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDb connection is success!")
})

const studentRouter = require("./routes/students.js");
app.use("/Student",studentRouter);

const BookRouter = require("./routes/Books.js");
app.use("/Book",BookRouter);

app.listen(PORT, console.log(`Listening on port ${PORT}...`));