
class AjaxQuery{
	constructor(apiKey, contract){
		this.apiKey = apiKey;
		this.contract = contract;
	}

	setContract(){
		switch (this.contract){
			case "rouen" :
				myMap.map.setView([49.44, 1.12], 13);
			break;
			case "mulhouse" :
				myMap.map.setView([47.75, 7.33], 13);
			break;
			case "lyon" :
				myMap.map.setView([45.75, 4.85], 13);
			break;
		default:
		}
		this.getStations();
	}

	getStations(){
		let request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
				let response = JSON.parse(this.responseText);
				response.forEach(item => {
					const newStation = new Station(item.number, item.name, item.address, item.position.latitude, item.position.longitude, item.status, item.totalStands.availabilities.bikes,item.totalStands.availabilities.stands, item.totalStands.capacity);
					myMap.addStation(newStation);
				});
			}
		};
		request.open("GET", "https://api.jcdecaux.com/vls/v3/stations?contract=" + this.contract + "&apiKey=" + this.apiKey);
		request.send();
	}
}