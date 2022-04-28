function showTime(){
let date = new Date();
let hr = date.getHours(); 
let min = date.getMinutes(); 
let sec = date.getSeconds(); 
let period = "AM";
if(hr == 0){
hr = 12;
}
if(hr > 12){
hr = hr - 12;
period = "PM";
}
hr = (hr < 10) ? "0" + hr : hr;
min = (min < 10) ? "0" + min : min;
sec = (sec < 10) ? "0" + sec : sec;
let Currenttime = hr + ":" + min + ":" + sec + " " + period;
document.getElementById("clock").innerText = Currenttime;
document.getElementById("clock").textContent = Currenttime;
setTimeout(showTime, 1000);
}
showTime();
