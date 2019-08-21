//let the time value

let hours = 0;
let minutes = 0;
let seconds = 0;
// let the display full time
let displayHours = 0;
let displayMinutes = 0;
let displaySeconds = 0;

// set interval for stop the watch
let interval = null;

// let define stopwatch status
let status = "stopped";

// make a function of stop watch

function stopWatch() {

    seconds++;
// agr 60 seconds pury hojain to minutes shuru hojain
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
// agar 60 minutes pury hojain to hours shuru hojain
        if(minutes/60 === 1) {
            minutes = 0;
            hours++;
        }
    }
// if statment for dipplay proper time 
    if(seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }
    if(minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayminutes = minutes;
    }
    if(hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    // display of time

    document.getElementById("time").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
};

// function for start and stop the timer
function startStop() {
    if (status === "stopped") {
        interval = window.setInterval(stopWatch , 1000);
        document.getElementById("startstop").innerHTML = "Stop";
        status = "started"
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML = "Start";
        status = "stopped";
    }
    
};

// function for reset timer
function reset() {

    window.clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("time").innerHTML = "00:00:00";
    document.getElementById("startstop").innerHTML = "Start";

};