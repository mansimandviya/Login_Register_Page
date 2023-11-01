const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StudentModel = require("./models/Student");
const bodyParser = require('body-parser');



const app = express();
//app.use(express.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/student");

app.post("/login",(req, res)=>{
    const{email,password} = req.body;
    StudentModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("Not Registered")
        }
    })
})

app.post('/register', (req, res)=>{
    StudentModel.create(req.body)
    .then(students => res.json(students))
    .catch(err => res.json(err)) 
})

const PORT = 8000;
 
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
