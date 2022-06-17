// Area that displays the timer
const timerArea = document.getElementById('timer');

// Timer buttons to set the desired time
const twentyFiveTimer = document.getElementById('25timer');
const fiveTimer = document.getElementById('5timer');
const fifteenTimer = document.getElementById('15timer');


// Setting the buttons to not disbaled on start
twentyFiveTimer.disabled = false;
fiveTimer.disabled = false;
fifteenTimer.disabled = false;

// Default, set the timer to 25 minutes
timerArea.innerHTML = '25:00';

// Functions to handle the buttons
function setTimerTo5Minutes() {
    timerArea.innerHTML = '05:00';
}

function setTimerTo15Minutes() {
    timerArea.innerHTML = '15:00';
}

function setTimerTo25Minutes() {
    timerArea.innerHTML = '25:00';
}

// Function to handle the start button
function startTimer() {
    let timer = timerArea.innerHTML.split(':');
    let minutes = parseInt(timer[0]);
    let seconds = parseInt(timer[1]);

    twentyFiveTimer.disabled = true;
    fiveTimer.disabled = true;
    fifteenTimer.disabled = true;

    let interval = setInterval(function () {
        seconds--;
        if (seconds < -1) {
            minutes--;
            seconds = 59;
        }
        if (minutes < -1) {
            clearInterval(interval);
            return;
        }
        if (minutes <= -1 && seconds <= -1) {
            clearInterval(interval);
            alert('Time is up!');
            timerArea.innerHTML = '25:00';
            twentyFiveTimer.disabled = false;
            fiveTimer.disabled = false;
            fifteenTimer.disabled = false;
        }

        timerArea.innerHTML = minutes + ':' + seconds;
    }, 1000);

    let stopButton = document.getElementById('stop');

    // Function to handle the stop button
    function stopTimer() {
        clearInterval(interval);
    }

    let resetButton = document.getElementById('reset');

    // Function to handle the reset button
    function resetTimer() {
        stopTimer();
        timerArea.innerHTML = '25:00';
    }

    resetButton.addEventListener('click', resetTimer);
    stopButton.addEventListener('click', stopTimer);
}