class FormClass{
    constructor(ref,  fname, lname) {
        this.ref= ref;
        this.fname = fname;
        this.lname = lname;
	}

    init(){
        this.formValidation();
        submitBtn.onclick = () => this.reserver();
        reservationForm.addEventListener("input", () => this.formValidation());
        delbtn.onclick = () => this.deleteReservation();
    }

    reserver(){
		if (canvasIsFilled && canReserve === true){
            let content = "Vélo réservé à la station : " + this.ref+ " par " + this.lname + " " + this.fname + "<br>";
            document.getElementById("reservation").innerHTML = content;
            popUp("Réservation validée");
            reservationContainer.classList.add("visible");
            sideContainer.classList.remove("visible");
            modal1.classList.remove("visible");
            canReserve = false;
            const time = new Date();
            const newTimer = new Timer(time.getTime(), 20*60000);
            newTimer.start();
            activeSession.saveDataTemporary(this.ref, time.getTime(), 20*60000)
            activeSession.saveDataPermanent(this.lname, this.fname);
            newcanvas.reset();
		}
		else {
            popUp("Vous avez déjà une réservation en cours");
		}
	};	

    formValidation(){
        this.lname = document.getElementById("lname").value;
        this.fname = document.getElementById("fname").value;
        this.fnameIsFilled() && this.lnameIsFilled()  && canReserve ?
            reservBtn.removeAttribute("disabled") :
            reservBtn.setAttribute("disabled", true);   
    }

    fnameIsFilled(){return this.fname !== ""}

    lnameIsFilled(){return this.lname !== ""}

    deleteReservation(){
        clearInterval(interval);
        canReserve = true;
        document.getElementById("reservation").innerHTML = ""
        document.getElementById("time").innerHTML = "";
        reservationContainer.classList.remove("visible");
        activeSession.resetTemporary()
        popUp("Réservation annulée");
        this.formValidation()
    }
}






