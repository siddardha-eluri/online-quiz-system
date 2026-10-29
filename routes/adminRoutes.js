const express=require("express");

const router=express.Router();

const Question=require("../models/Question");

router.get("/",(req,res)=>{
 res.render("admin");
});

router.post("/add",async(req,res)=>{

 const {question,option1,option2,option3,option4,answer,category}=req.body;

 await Question.create({

  question,

  options:[option1,option2,option3,option4],

  answer,

  category

 });

 res.redirect("/admin");

});

module.exports=router;