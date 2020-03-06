class Session{
    constructor(ref, lname, fname, time, duration){
        this.ref = ref;
        this.lname = lname;
        this.fname = fname;
        this.time = time;
        this.duration = duration;
    }

    init(){
        this.getData()       
        if(this.fname != null) document.getElementById("fname").value = this.fname;
        if(this.lname != null) document.getElementById("lname").value = this.lname;
        if (this.ref != null && this.duration != null){
            let content = "Vélo réservé à la station : " + this.ref+ " par " + this.lname + " " + this.fname + "<br>";
            document.getElementById("reservation").innerHTML = content;
            reservationContainer.classList.add("visible");
            canReserve = false;
            const time = new Date();
            const duration = new Date()
            time.setTime(this.time);
            duration.setTime(this.duration);
            const newTimer = new Timer(time.getTime(), duration.getTime());
            newTimer.start();
        }
    }

    saveDataTemporary(ref, time, duration){
        sessionStorage.setItem("stationName", ref);
        sessionStorage.setItem("time", time);
        sessionStorage.setItem("duration", duration);
    }

    resetTemporary(){
        sessionStorage.removeItem("stationName");
        sessionStorage.removeItem("time");
        sessionStorage.removeItem("duration");
    }

    saveDataPermanent(lname, fname){
        localStorage.setItem("lname", lname);
        localStorage.setItem("fname", fname);
    }

    getData(){
        this.ref = sessionStorage.getItem("stationName");
        this.time = sessionStorage.getItem("time");
        this.duration = sessionStorage.getItem("duration");
        this.lname = localStorage.getItem("lname");
        this.fname = localStorage.getItem("fname");
    }  
}