class Session{
    constructor(ref, lname, fname, time){
        this.ref = ref;
        this.lname = lname;
        this.fname = fname;
        this.time = time;
    }

    init(){
        this.getData()       
        if(this.fname != null) document.getElementById("fname").value = this.fname;
        if(this.lname != null) document.getElementById("lname").value = this.lname;
        if (this.ref != null){
            let content = "Vélo réservé à la station : " + this.ref+ " par " + this.lname + " " + this.fname + "<br>";
            document.getElementById("reservation").innerHTML = content;
            reservationContainer.classList.add("visible");
            canReserve = false;
            const time = new Date();
            time.setTime(this.time)
            const newTimer = new Timer(time.getTime(), 20*60000);
            newTimer.start();
        }
    }

    saveDataTemporary(ref, time){
        sessionStorage.setItem("stationName", ref);
        sessionStorage.setItem("time", time);
    }

    resetTemporary(){
        sessionStorage.removeItem("stationName");
        sessionStorage.removeItem("time");
    }

    saveDataPermanent(lname, fname){
        localStorage.setItem("lname", lname);
        localStorage.setItem("fname", fname);
    }

    getData(){
        this.ref = sessionStorage.getItem("stationName");
        this.time = sessionStorage.getItem("time");
        this.lname = localStorage.getItem("lname");
        this.fname = localStorage.getItem("fname");
    }  
}