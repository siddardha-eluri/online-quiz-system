const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

/* HOME */

router.get("/",(req,res)=>{

res.render("login");

});

/* REGISTER PAGE */

router.get("/register",(req,res)=>{

res.render("register");

});

/* REGISTER */

router.post("/register",async(req,res)=>{

const {name,email,password}=req.body;

const hash=await bcrypt.hash(password,10);

await User.create({name,email,password:hash});

res.redirect("/");

});

/* LOGIN */

router.post("/login",async(req,res)=>{

const {email,password}=req.body;

const user=await User.findOne({email});

if(!user) return res.send("User not found");

const valid=await bcrypt.compare(password,user.password);

if(!valid) return res.send("Invalid password");

req.session.user=user;

res.redirect("/quiz/dashboard");

});

/* LOGOUT */

router.get("/logout",(req,res)=>{

req.session.destroy();

res.redirect("/");

});

module.exports=router;