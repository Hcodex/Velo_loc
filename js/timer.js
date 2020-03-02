class Timer{
    constructor(startTime, duration) {
        this.startTime = new Date(startTime);
        this.duration= duration;
    }

    start(){
        clearInterval(interval);
        interval = setInterval(this.countdown.bind(this), 1000);
    }

    countdown(){
        let endtime = new Date();
        endtime = this.startTime.getTime() + this.duration;
        let timeLeft = new Date();
        const now = new Date().getTime();
        timeLeft = endtime - now;
        if (timeLeft < 1) {
           myForm.deleteReservation();
        }
        else {
            const minutesLeft = Math.floor(timeLeft / 60000);
            const secondLeft = Math.floor(timeLeft % 60000 /1000);
            let content = "Temps restant : " +  minutesLeft + " minutes et " + secondLeft + " secondes";
            document.getElementById("time").innerHTML = content;
        }
    }
}