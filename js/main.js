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

function setTimerTo10Seconds() {
    timerArea.innerHTML = '00:10';
}

// Function to handle the start button
function startTimer() {
    let timer = timerArea.innerHTML.split(':');
    let minutes = parseInt(timer[0]);
    let seconds = parseInt(timer[1]);
    let totalSeconds = minutes * 60 + seconds;

    let interval = setInterval(function () {
        totalSeconds--;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        timerArea.innerHTML = minutes + ':' + seconds;

        if (totalSeconds === -1) {
            // Play the sound
            let audio = new Audio('media/alarm.mp3');
            audio.play();
            timerArea.innerHTML = 'Time is up!';
            clearInterval(interval);
            resetTimer();
        }
    }, 1000);

    let stopButton = document.getElementById('stop');
    let resetButton = document.getElementById('reset');

    // Function to handle the reset button
    function resetTimer() {
        clearInterval(interval);
        timerArea.innerHTML = '00:00';
    }

    resetButton.addEventListener('click', resetTimer);
    stopButton.addEventListener('click', stopTimer);
}