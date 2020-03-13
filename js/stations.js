class Station{
	constructor(number, name, address, latitude, longitude, status, bikes, stands, capacity) {
		this.number= number;
		this.name = name;
		this.address = 	address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.status = status;
		this.bikes = bikes;
		this.stands = stands;
		this.capacity = capacity;
	}

	showMarkerData(){
		let content = "Station : " + this.name +"<br>";
		content += "Adresse : " + this.address + "<br>";
		content += "Statut : " + this.status + "<br>";
		content += "Emplacements libres : " + this.stands + "<br>";
		content += "Vélos disponibles : " + this.bikes + "<br>";
		document.getElementById("station-info").innerHTML = content;
		sideContainer.classList.add("visible");
		this.setForm();
	}

	setStationIcon(){
		switch (true){
			case (this.status == "OPEN"  &&  this.bikes >= 2 && this.stands > 0) :
				return myMap.openIcon;
				break;
			case (this.status == "OPEN"  &&  this.bikes < 1) :
				return myMap.noBikeIcon;
				break;
			case (this.status == "OPEN"  &&  this.stands < 1) :
				return myMap.overflowIcon;
				break;
			case (this.status == "OPEN"  &&  this.bikes < 2) :
				return myMap.orangeIcon;
				break;
			case (this.status == "CLOSED"):
				return myMap.closedIcon;
				break;
			default:
				return myMap.defaultIcon;
		}
	}

	setForm(){
		switch (true){
			case (this.status === "OPEN" && canReserve === true && this.bikes > 0) :
				infoContainer.innerHTML = "";
				reservationForm.style.display = "block";
				myForm.ref = this.name;
			break;
			case (this.status === "CLOSED"):
				reservationForm.style.display = "none";
				infoContainer.innerHTML = "Cette station est fermée";
				infoContainer.classList.add("visible");
			break;
			case (this.bikes < 1):
				reservationForm.style.display = "none";
				infoContainer.innerHTML = "Il n'y a plus de vélos disponibles à cette station";
				infoContainer.classList.add("visible");
			break;
			case (canReserve !== true):
				reservationForm.style.display = "none";
				infoContainer.innerHTML = "Vous ne pouvez pas réserver si vous avez une réservation en cours";
				infoContainer.classList.add("visible");
		break;
			default:
		}
	}
}