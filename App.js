// alert("Welcome to new degital clock !")
var min = 0;
var hours = 0;
var msec = 0;
var theganta = 0;
var interval;
var minHeading = document.getElementById("hours");
var secondHeading = document.getElementById("second");
var msecondHeading = document.getElementById("msec");
var dis =  document.getElementById("start");
var ganta = document.getElementById("ganta");





function timer(){
    msec++;
    msecondHeading.innerHTML = msec;
    if(msec >= 100){
        min ++;
        secondHeading.innerHTML = min;
        msec = 0;
    }else if(min >=59){
        hours ++;
        minHeading.innerHTML = hours;
        min = 0;
    }else if (hours >= 59){
        theganta ++;
        ganta.innerHTML = theganta;
        hours = 0;

    }else if (theganta>= 12){
        theganta = 0;
        theganta ++;

    ganta.innerHTML = theganta;
   
    }
}
function start(){
    interval = setInterval(timer,10)
    dis.disabled = true;
   

}

function stop(){
  clearInterval(interval);
  dis.disabled = false;
}

function rest(){
    min = 0;
    hours = 0;
    msec = 0;
    theganta = 0;

minHeading.innerHTML = hours;
secondHeading.innerHTML = min;
msecondHeading.innerHTML = msec;
ganta.innerHTML = theganta;

stop()

}