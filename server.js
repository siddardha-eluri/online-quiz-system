const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
secret:"quizsecret",
resave:false,
saveUninitialized:true
}));

/* Make user available in all views */

app.use((req,res,next)=>{

res.locals.user=req.session.user;

next();

});

app.use("/",authRoutes);
app.use("/quiz",quizRoutes);

app.listen(5000,()=>{

console.log("Server running on port 5000");

});