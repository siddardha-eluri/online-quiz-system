const express = require("express");
const router = express.Router();

const Question = require("../models/Question");
const Score = require("../models/Score");


/* =========================
   DASHBOARD
========================= */

router.get("/dashboard", (req, res) => {

if (!req.session.user) {
return res.redirect("/");
}

res.render("dashboard", { user: req.session.user });

});


/* =========================
   START QUIZ
========================= */

router.get("/start/:category", async (req, res) => {

try {

let category = req.params.category;

if (category === "gk") category = "General Knowledge";
if (category === "history") category = "History";

/* RANDOMIZE QUESTIONS */

const questions = await Question.aggregate([
{ $match: { category: category } },
{ $sample: { size: 30 } }
]);

if (!questions.length) {
return res.send("No questions found in this category");
}

req.session.questions = questions;
req.session.round = 1;
req.session.score = 0;
req.session.category = category;

res.redirect("/quiz/round");

} catch (error) {

console.log(error);
res.send("Error loading quiz");

}

});


/* =========================
   SHOW ROUND
========================= */

router.get("/round", (req, res) => {

if (!req.session.questions) {
return res.redirect("/quiz/dashboard");
}

const round = req.session.round;

const start = (round - 1) * 10;
const end = start + 10;

const roundQuestions = req.session.questions.slice(start, end);

res.render("quiz", {
questions: roundQuestions,
round: round,
user: req.session.user
});

});


/* =========================
   SUBMIT QUIZ
========================= */

router.post("/submit", async (req, res) => {

const answers = req.body;

const questions = req.session.questions;
const round = req.session.round;

const start = (round - 1) * 10;
const end = start + 10;

const roundQuestions = questions.slice(start, end);


/* CHECK ANSWERS */

roundQuestions.forEach(q => {

if (answers[q._id] === q.answer) {
req.session.score++;
}

});


/* NEXT ROUND */

if (req.session.round < 3) {

req.session.round++;
return res.redirect("/quiz/round");

}


/* SAVE FINAL SCORE */

await Score.create({

user: req.session.user.name,
score: req.session.score,
category: req.session.category

});

const finalScore = req.session.score;

/* RESET SESSION */

req.session.questions = null;
req.session.round = null;
req.session.score = null;

res.render("result", {
score: finalScore,
user: req.session.user
});

});


/* =========================
   LEADERBOARD
========================= */

router.get("/leaderboard", async (req, res) => {

const top = await Score.find()
.sort({ score: -1 })
.limit(5);

res.render("leaderboard", {
top: top,
user: req.session.user
});

});


/* =========================
   ADMIN PANEL
========================= */

router.get("/admin", async (req, res) => {

const questions = await Question.find();

res.render("admin", {
questions: questions,
user: req.session.user
});

});


/* =========================
   ADD QUESTION
========================= */

router.post("/add-question", async (req, res) => {

const { question, option1, option2, option3, option4, answer, category } = req.body;

await Question.create({

question: question,

options: [
option1,
option2,
option3,
option4
],

answer: answer,
category: category

});

res.redirect("/quiz/admin");

});


module.exports = router;