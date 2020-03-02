
class Map{
	constructor(){
		this.map = L.map("mapid");
	}

	init(){
		const osmLayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
			attribution: "© OpenStreetMap contributors",
			maxZoom: 18
		});
		this.map.addLayer(osmLayer);


		this.LeafIcon = L.Icon.extend({
			options: {
				shadowUrl: "./img/marker-shadow.png",
				iconSize:     [25, 41],
				shadowSize:   [50, 82],
				iconAnchor:   [12,41],
				shadowAnchor: [16, 80],
				popupAnchor:  [-3, -76]
			}
		});
		
		this.openIcon  = new this.LeafIcon({iconUrl: "./img/leaf-green.png"});
		this.noBikeIcon = new this.LeafIcon({iconUrl: "./img/leaf-nobike.png"});
		this.overflowIcon = new this.LeafIcon({iconUrl: "./img/leaf-overflow.png"});
		this.orangeIcon = new this.LeafIcon({iconUrl: "./img/leaf-orange.png"});
		this.closedIcon = new this.LeafIcon({iconUrl: "./img/leaf-closed.png"});
		this.defaultIcon = new this.LeafIcon({iconUrl: "./img/marker-icon.png"});
	}

	addStation(station){
		let marker = L.marker([station.latitude, station.longitude], {icon:station.setStationIcon()}).addTo(this.map).on("click", () => station.showMarkerData());
	}
}
