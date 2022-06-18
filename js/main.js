const timerArea = document.getElementById('timer');
const twentyFiveTimer = document.getElementById('25timer');
const fiveTimer = document.getElementById('5timer');
const fifteenTimer = document.getElementById('15timer');

timerArea.innerHTML = '00:00';

function setTimerTo5Minutes() {
    timerArea.innerHTML = '05:00';
}

function setTimerTo15Minutes() {
    timerArea.innerHTML = '15:00';
}

function setTimerTo25Minutes() {
    timerArea.innerHTML = '25:00';
}

function startTimer() {
    let timer = timerArea.innerHTML.split(':');
    let minutes = parseInt(timer[0]);
    let seconds = parseInt(timer[1]);
    let totalSeconds = minutes * 60 + seconds;
    let audio = new Audio('media/alarm.mp3');
    let resetButton = document.getElementById('reset');

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
            timerArea.innerHTML = 'Time is up!';
            clearInterval(interval);
            resetTimer();
        }
    }, 1000);

    function resetTimer() {
        clearInterval(interval);
        timerArea.innerHTML = '00:00';
    }
    resetButton.addEventListener('click', resetTimer);
}