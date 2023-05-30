// Описание проекта:
// Сверстать статичный макет с использованием препроцессоров. 
// Добавить динамику в часы и год
// Составляющие проекта:
// querySelector; innerHTML; new Date; setInterval / setTimeout

class Test {
    constructor() {
        this.time = document.getElementById(`time`);
        setInterval(this.doClock, 1000);
    }

    doClock() {
        let date = new Date();
        let hours = date.getHours().toString();
        let minutes = date.getMinutes().toString();
        let seconds = date.getSeconds().toString();
        let year = date.getFullYear().toString();

        if (hours.length < 2) {
            hours = `0` + hours;
        }

        if (minutes.length < 2) {
            minutes = `0` + minutes;
        }
        
        if (seconds.length < 2) {
            seconds = `0` + seconds;
        }

        let clockString = hours + `:` + minutes + `:` + seconds;
        this.time.textContent = clockString;

        document.querySelector(`.watch p`).innerHTML = year;
    }
}

const test = new Test();
