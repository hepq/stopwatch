let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let hour = 0;
let minute = 0;
let second = 0;
let millisec = 0;

let count = 0;
let countGap = 0;
let stopTime = 0;
let timer = false;
let isStart = false;

let startTime = 0;

startBtn.addEventListener('click', function() {
    if(!isStart){
        startTime = Date.now();
        stopTime = 0;
    } 
    if(stopTime != 0){
        countGap += Date.now() - stopTime;
    }
    stopTime = 0;
    timer = true;
    isStart = true;
    stopWatch();
});

stopBtn.addEventListener('click', function() {
    timer = false;
    if(stopTime == 0) stopTime = Date.now();
});

resetBtn.addEventListener('click', function() {
    timer = false;
    isStart = false;
    hour = 0;
    minute = 0;
    second = 0;
    millisec = 0;
    count = 0;
    countGap = 0;
    document.getElementById("time").innerHTML = "00:00:00.00"
});

function stopWatch() {
    if(!timer) return;
    count = Date.now() - startTime - countGap;
    millisec = count % 1000 / 10 | 0;
    count = count / 1000 | 0;
    second = count % 60;
    count = count / 60 | 0;
    minute = count & 60;
    count = count / 60 | 0;
    hour = count;
    
    let hrString = hour;
    let minString = minute;
    let secString = second;
    let millisecString = millisec;
    
    if (hour < 10) {
        hrString = "0" + hrString;
    }
    if (minute < 10) {
        minString = "0" + minString;
    }
    if (second < 10) {
        secString = "0" + secString;
    }
    if (millisec < 10) {
        millisecString = "0" + millisecString;
    }

    let showTime = `${ hrString }:${minString}:${secString}.${millisecString}`;
    document.getElementById('time').innerHTML = showTime;

    setTimeout(stopWatch, 10);
}
