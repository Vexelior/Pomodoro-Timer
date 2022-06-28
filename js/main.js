let timerArea = document.getElementById('timer');
let twentyFiveTimer = document.getElementById('25timer');
let fiveTimer = document.getElementById('5timer');
let fifteenTimer = document.getElementById('15timer');

// Set timer area to zero initially
timerArea.innerHTML = '00:00';

function SetTimerTo5Minutes() {
    timerArea.innerHTML = '05:00';
}

function SetTimerTo15Minutes() {
    timerArea.innerHTML = '15:00';
}

function SetTimerTo25Minutes() {
    timerArea.innerHTML = '25:00';
}

function DisableTimerButtons() {
    twentyFiveTimer.disabled = true;
    fiveTimer.disabled = true;
    fifteenTimer.disabled = true;
}

function EnableTimerButtons() {
    twentyFiveTimer.disabled = false;
    fiveTimer.disabled = false;
    fifteenTimer.disabled = false;
}

function StartTimer() {
    DisableTimerButtons();
    let timer = timerArea.innerHTML.split(':');
    let minutes = parseInt(timer[0]);
    let seconds = parseInt(timer[1]);
    let totalSeconds = minutes * 60 + seconds;
    let audio = new Audio('media/alarm.mp3');
    let resetButton = document.getElementById('reset');

    if (timerArea.innerHTML == '00:00') {
        alert('Please select a timer.');
        EnableTimerButtons();
        return;
    }

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
            audio.play();
            alert('Time is up!');
            EnableTimerButtons()
            clearInterval(interval);
            resetTimer();
        }
    }, 1000);

    function resetTimer() {
        clearInterval(interval);
        timerArea.innerHTML = '00:00';
        EnableTimerButtons()
    }
    resetButton.addEventListener('click', resetTimer);
}