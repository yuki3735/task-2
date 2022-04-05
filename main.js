let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let elapsedTime = 0;
let intervalId = false;

start.classList.remove("inactive");
stop.classList.add("inactive");
reset.classList.add("inactive");
// 表示できるように関数を作る
function updateTime(){
  let ms = elapsedTime % 1000;
  let s = Math.floor(elapsedTime / 1000) % 60;
  let m = Math.floor(elapsedTime / (1000 * 60) % 60);
  let h = Math.floor(elapsedTime / (1000 * 60 * 60) % 60);
  
  let msStr = ms.toString().padStart(3, "0");
  let sStr = s.toString().padStart(2, "0");
  let mStr = m.toString().padStart(2, "0");
  let hStr = h.toString().padStart(2, "0");
  
  timer.innerHTML = hStr + ":" + mStr + ":" + sStr + "." + msStr;
}
// カウント関数を作る
start.addEventListener("click", function(){
  if (intervalId !== false){ return; }
  let pre = new Date();
  intervalId = setInterval(function(){
    let now = new Date();
    elapsedTime += now - pre;
    pre = now;
    updateTime();
  },10);
  start.classList.add("inactive");
  stop.classList.remove("inactive");
  reset.classList.remove("inactive");
})

stop.addEventListener("click", function(){
  clearInterval(intervalId);
  intervalId = false;
  start.classList.remove("inactive");
  stop.classList.add("inactive");
  reset.classList.remove("inactive");
})

reset.addEventListener("click", function() {
  elapsedTime = 0;
  updateTime();
  $(function(){
    if($("#start").hasClass("inactive")){
      start.classList.add("inactive");
      stop.classList.remove("inactive");
      reset.classList.remove("inactive");
    }else{ 
      start.classList.remove("inactive");
      stop.classList.add("inactive");
      reset.classList.add("inactive");
  }});
 
})