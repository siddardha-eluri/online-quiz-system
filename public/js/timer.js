let time = 300;   // 5 minutes

const timer = document.getElementById("timer");

const interval = setInterval(()=>{

time--;

let minutes=Math.floor(time/60);
let seconds=time%60;

timer.innerText = minutes + ":" + (seconds<10?"0":"") + seconds;

if(time<=0){

clearInterval(interval);

document.forms[0].submit();

}

},1000);