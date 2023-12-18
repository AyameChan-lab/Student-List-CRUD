const express = require("express");
const app = express();
const cors = require("cors");
// Router import
const route = require("./Router/route");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CRUD_StudentList")
.then(()=>{
    console.log("Connect to Database !");
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",route);

app.listen("5000",()=>{
    console.log("Server RUN Successfully Happy Dev!!");
})