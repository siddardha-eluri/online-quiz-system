const mongoose = require("mongoose");
const Question = require("../models/Question");

mongoose.connect("mongodb://127.0.0.1:27017/quizDB");

const questions = [

/* =====================
GENERAL KNOWLEDGE (30)
===================== */

{
question:"Capital of Australia?",
options:["Sydney","Canberra","Melbourne","Perth"],
answer:"Canberra",
category:"General Knowledge",
difficulty:"easy"
},

{
question:"Largest ocean in the world?",
options:["Atlantic","Indian","Pacific","Arctic"],
answer:"Pacific",
category:"General Knowledge",
difficulty:"easy"
},

{
question:"Which planet is known as Red Planet?",
options:["Mars","Venus","Jupiter","Mercury"],
answer:"Mars",
category:"General Knowledge",
difficulty:"easy"
},

{
question:"Currency of Japan?",
options:["Won","Yen","Dollar","Rupee"],
answer:"Yen",
category:"General Knowledge",
difficulty:"easy"
},

{
question:"Largest continent?",
options:["Africa","Asia","Europe","Australia"],
answer:"Asia",
category:"General Knowledge",
difficulty:"easy"
},

{
question:"Fastest land animal?",
options:["Lion","Tiger","Cheetah","Leopard"],
answer:"Cheetah",
category:"General Knowledge",
difficulty:"easy"
},

{
question:"Smallest planet?",
options:["Mercury","Mars","Venus","Pluto"],
answer:"Mercury",
category:"General Knowledge",
difficulty:"easy"
},

{
question:"Largest desert?",
options:["Sahara","Gobi","Kalahari","Thar"],
answer:"Sahara",
category:"General Knowledge",
difficulty:"easy"
},

{
question:"Which gas do plants absorb?",
options:["Oxygen","Carbon dioxide","Hydrogen","Nitrogen"],
answer:"Carbon dioxide",
category:"General Knowledge",
difficulty:"easy"
},

{
question:"Which organ pumps blood?",
options:["Brain","Liver","Heart","Kidney"],
answer:"Heart",
category:"General Knowledge",
difficulty:"easy"
},

/* Medium */

{
question:"Speed of light?",
options:["300000 km/s","150000 km/s","200000 km/s","100000 km/s"],
answer:"300000 km/s",
category:"General Knowledge",
difficulty:"medium"
},

{
question:"First computer virus?",
options:["Creeper","ILOVEYOU","Trojan","MyDoom"],
answer:"Creeper",
category:"General Knowledge",
difficulty:"medium"
},

{
question:"Father of computer?",
options:["Newton","Charles Babbage","Turing","Bill Gates"],
answer:"Charles Babbage",
category:"General Knowledge",
difficulty:"medium"
},

{
question:"Which country invented paper?",
options:["China","India","Egypt","Greece"],
answer:"China",
category:"General Knowledge",
difficulty:"medium"
},

{
question:"Which metal is liquid?",
options:["Mercury","Iron","Copper","Silver"],
answer:"Mercury",
category:"General Knowledge",
difficulty:"medium"
},

{
question:"Largest volcano?",
options:["Mauna Loa","Etna","Fuji","Kilimanjaro"],
answer:"Mauna Loa",
category:"General Knowledge",
difficulty:"medium"
},

{
question:"Which is fastest bird?",
options:["Falcon","Eagle","Crow","Sparrow"],
answer:"Falcon",
category:"General Knowledge",
difficulty:"medium"
},

{
question:"Human body bones?",
options:["206","210","190","300"],
answer:"206",
category:"General Knowledge",
difficulty:"medium"
},

{
question:"Which blood group universal donor?",
options:["O-","AB","A","B"],
answer:"O-",
category:"General Knowledge",
difficulty:"medium"
},

{
question:"Which element has symbol O?",
options:["Gold","Oxygen","Iron","Zinc"],
answer:"Oxygen",
category:"General Knowledge",
difficulty:"medium"
},

/* Hard */

{
question:"SI unit of pressure?",
options:["Pascal","Newton","Joule","Watt"],
answer:"Pascal",
category:"General Knowledge",
difficulty:"hard"
},

{
question:"Largest moon in solar system?",
options:["Titan","Europa","Ganymede","Io"],
answer:"Ganymede",
category:"General Knowledge",
difficulty:"hard"
},

{
question:"First artificial satellite?",
options:["Sputnik 1","Explorer 1","Apollo","Vostok"],
answer:"Sputnik 1",
category:"General Knowledge",
difficulty:"hard"
},

{
question:"Which layer protects Earth from UV?",
options:["Ozone","Troposphere","Mesosphere","Stratosphere"],
answer:"Ozone",
category:"General Knowledge",
difficulty:"hard"
},

{
question:"Which country has most islands?",
options:["Sweden","Indonesia","Canada","Norway"],
answer:"Sweden",
category:"General Knowledge",
difficulty:"hard"
},

{
question:"Light year measures?",
options:["Distance","Time","Speed","Energy"],
answer:"Distance",
category:"General Knowledge",
difficulty:"hard"
},

{
question:"Which scientist discovered gravity?",
options:["Newton","Einstein","Galileo","Tesla"],
answer:"Newton",
category:"General Knowledge",
difficulty:"hard"
},

{
question:"Which gas is most abundant?",
options:["Nitrogen","Oxygen","CO2","Hydrogen"],
answer:"Nitrogen",
category:"General Knowledge",
difficulty:"hard"
},

{
question:"Which planet largest?",
options:["Jupiter","Saturn","Neptune","Earth"],
answer:"Jupiter",
category:"General Knowledge",
difficulty:"hard"
},

{
question:"Deepest ocean trench?",
options:["Mariana","Java","Peru","Puerto Rico"],
answer:"Mariana",
category:"General Knowledge",
difficulty:"hard"
},

/* =====================
HISTORY (30)
===================== */

{
question:"First Prime Minister of India?",
options:["Nehru","Gandhi","Patel","Rajendra Prasad"],
answer:"Nehru",
category:"History",
difficulty:"easy"
},

{
question:"Father of Nation?",
options:["Nehru","Gandhi","Tagore","Ambedkar"],
answer:"Gandhi",
category:"History",
difficulty:"easy"
},

{
question:"Who built Taj Mahal?",
options:["Akbar","Shah Jahan","Aurangzeb","Babur"],
answer:"Shah Jahan",
category:"History",
difficulty:"easy"
},

{
question:"Battle of Plassey year?",
options:["1757","1764","1857","1707"],
answer:"1757",
category:"History",
difficulty:"easy"
},

{
question:"Quit India movement year?",
options:["1942","1930","1919","1947"],
answer:"1942",
category:"History",
difficulty:"easy"
},

{
question:"Indian independence year?",
options:["1947","1950","1930","1942"],
answer:"1947",
category:"History",
difficulty:"easy"
},

{
question:"Who founded Maurya Empire?",
options:["Ashoka","Chandragupta Maurya","Bindusara","Harsha"],
answer:"Chandragupta Maurya",
category:"History",
difficulty:"easy"
},

{
question:"Capital of Mughal empire?",
options:["Delhi","Agra","Lahore","Fatehpur"],
answer:"Delhi",
category:"History",
difficulty:"easy"
},

{
question:"Who discovered sea route to India?",
options:["Columbus","Vasco da Gama","Cook","Magellan"],
answer:"Vasco da Gama",
category:"History",
difficulty:"easy"
},

{
question:"Who wrote Arthashastra?",
options:["Chanakya","Kalidasa","Tulsidas","Valmiki"],
answer:"Chanakya",
category:"History",
difficulty:"easy"
},

/* Medium */

{
question:"Dandi March year?",
options:["1930","1920","1942","1919"],
answer:"1930",
category:"History",
difficulty:"medium"
},

{
question:"First President of India?",
options:["Rajendra Prasad","Nehru","Ambedkar","Patel"],
answer:"Rajendra Prasad",
category:"History",
difficulty:"medium"
},

{
question:"Who built Qutub Minar?",
options:["Qutubuddin Aibak","Akbar","Humayun","Babur"],
answer:"Qutubuddin Aibak",
category:"History",
difficulty:"medium"
},

{
question:"Who was last Mughal emperor?",
options:["Bahadur Shah Zafar","Aurangzeb","Shah Jahan","Akbar"],
answer:"Bahadur Shah Zafar",
category:"History",
difficulty:"medium"
},

{
question:"Who founded Gupta Empire?",
options:["Chandragupta I","Samudragupta","Ashoka","Harsha"],
answer:"Chandragupta I",
category:"History",
difficulty:"medium"
},

{
question:"Who wrote Ramayana?",
options:["Valmiki","Vyasa","Kalidasa","Tulsidas"],
answer:"Valmiki",
category:"History",
difficulty:"medium"
},

{
question:"Who was Ashoka's father?",
options:["Bindusara","Chandragupta","Harsha","Akbar"],
answer:"Bindusara",
category:"History",
difficulty:"medium"
},

{
question:"Who built Red Fort?",
options:["Shah Jahan","Akbar","Babur","Aurangzeb"],
answer:"Shah Jahan",
category:"History",
difficulty:"medium"
},

{
question:"Which empire followed Maurya?",
options:["Shunga","Gupta","Mughal","Chola"],
answer:"Shunga",
category:"History",
difficulty:"medium"
},

{
question:"Battle of Panipat first year?",
options:["1526","1556","1761","1707"],
answer:"1526",
category:"History",
difficulty:"medium"
},

/* Hard */

{
question:"Who translated Arthashastra?",
options:["R Shamasastry","Romila Thapar","Irfan Habib","RC Majumdar"],
answer:"R Shamasastry",
category:"History",
difficulty:"hard"
},

{
question:"Who was founder of Chola dynasty?",
options:["Vijayalaya","Rajaraja","Rajendra","Karikala"],
answer:"Vijayalaya",
category:"History",
difficulty:"hard"
},

{
question:"Who wrote Ain-i-Akbari?",
options:["Abul Fazl","Badauni","Tansen","Birbal"],
answer:"Abul Fazl",
category:"History",
difficulty:"hard"
},

{
question:"Which treaty ended Anglo-Maratha war?",
options:["Treaty of Salbai","Treaty of Bassein","Treaty of Surat","Treaty of Purandar"],
answer:"Treaty of Salbai",
category:"History",
difficulty:"hard"
},

{
question:"Who was founder of Vijayanagara Empire?",
options:["Harihara","Krishnadevaraya","Devaraya","Achyuta"],
answer:"Harihara",
category:"History",
difficulty:"hard"
},

{
question:"Who defeated Ibrahim Lodi?",
options:["Babur","Akbar","Humayun","Sher Shah"],
answer:"Babur",
category:"History",
difficulty:"hard"
},

{
question:"Who built Sanchi Stupa?",
options:["Ashoka","Chandragupta","Harsha","Akbar"],
answer:"Ashoka",
category:"History",
difficulty:"hard"
},

{
question:"Who founded Sikhism?",
options:["Guru Nanak","Guru Gobind","Guru Arjun","Guru Ram"],
answer:"Guru Nanak",
category:"History",
difficulty:"hard"
},

{
question:"Who was mentor of Chandragupta Maurya?",
options:["Chanakya","Ashoka","Bindusara","Megasthenes"],
answer:"Chanakya",
category:"History",
difficulty:"hard"
},

{
question:"Who invaded India in 1398?",
options:["Timur","Babur","Nadir Shah","Ghori"],
answer:"Timur",
category:"History",
difficulty:"hard"
}

];

async function seed(){

await Question.deleteMany();

await Question.insertMany(questions);

console.log("Questions Inserted Successfully");

mongoose.connection.close();

}

seed();