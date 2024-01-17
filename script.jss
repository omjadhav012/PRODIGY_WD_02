let stopwatch;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        stopwatch = setInterval(updateTime, 1000);
    }
}

function stopStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(stopwatch);
    }
}

function resetStopwatch() {
    stopStopwatch();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    document.getElementById('display').innerText = formattedTime;
}

function pad(number) {
    return (number < 10) ? `0${number}` : number;
}
