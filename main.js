const timeElement = document.querySelector('[data-time]');

let today, hours, minutes, seconds, time, delay;

function minutesString (minutes) {
    if (minutes < 10) {
        return ('0' + minutes);
    }
    return minutes;
}

function upDateTime() {
    today = new Date();
    hours = today.getHours();
    minutes = minutesString(today.getMinutes());
    seconds = today.getSeconds();
    time = hours + ':' + minutes;
    timeElement.textContent = time;
    console.log (time + ":" + seconds);
}

function Interval() {
    upDateTime();
    setInterval(function () {
        upDateTime();
    }, 60000);
}

upDateTime();
delay = 60 - seconds;
console.log(delay);

const myTimeout = setTimeout(Interval, delay * 1000);
