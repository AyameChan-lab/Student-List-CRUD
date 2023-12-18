const express = require("express");
const router = express.Router();
// เรียกใช้ Model
const STUDENT_MODEL = require("../Models/StudentModel");

// Function Delete : from req.params.id
function ID (id){
     return (id).slice(1);
}
// All Student
router.post("/",(req,res)=>{
    STUDENT_MODEL.find()
    .then((data)=>{
        res.json(data);
    }).catch(err=>res.json(err))
})
// Save Student to list
router.post("/create-student",(req,res)=>{
    STUDENT_MODEL.create(req.body)
    .then((data)=>{
        res.json(data);
    }).catch(err=>res.json(err))
});

// Singel Student
router.get("/student:id",(req,res)=>{
    const id = ID(req.params.id);
    // console.log(id)
    STUDENT_MODEL.findById(id)
    .then((data)=>{
        res.json(data);
    }).catch(err=>res.json(err))
})

// Edit Student
router.put("/student-edit:id",(req,res)=>{
    const id = ID(req.params.id);
    console.log(id)
    STUDENT_MODEL.findByIdAndUpdate(id,req.body)
    .then((data)=>{
        res.json(data);
    }).catch(err=>res.json(err))
})

// Delete Student
router.delete("/student-delete:id",(req,res)=>{
    const id = ID(req.params.id);
    STUDENT_MODEL.findByIdAndDelete(id)
    .then((data)=>{
        res.json(data)
    }).catch(err=>res.json(err));
})

module.exports = router;