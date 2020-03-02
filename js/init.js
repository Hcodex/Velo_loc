let interval; 
let canReserve = true;
let canvasIsFilled = false;

const submitBtn = document.getElementById("submitBtn");
const alertContainer = document.getElementById("alertContainer");
const sideContainer = document.getElementById("sideContainer");
const infoContainer = document.getElementById("infoContainer");
const reservationForm = document.getElementById("reservationForm");
const reservationContainer = document.getElementById("reservationContainer");
const delbtn = document.getElementById("deleteReservationBtn");
const reservBtn = document.getElementById("reservBtn");
const modal1 = document.getElementById("modal1");
const closeModalBtn = document.getElementById("closeModalBtn");

const myMap = new Map();
myMap.init();

const newcanvas = new Canvas("canvas");
newcanvas.init();

const myQuerry = new  AjaxQuery("0c636ced28ffb8863f7b5ffe0f067662f11b07c8", "lyon");
myQuerry.setContract();

const activeSession = new Session();
activeSession.init();

const myForm = new FormClass();
myForm.init();

const mySlider = new Slider(document.getElementById("diapo"));
mySlider.init();

reservationForm.addEventListener("click", function(event) {
    event.preventDefault();
});

reservBtn.onclick = () => {
    newcanvas.reset();
    modal1.classList.add("visible");
}

closeModalBtn.onclick = () => modal1.classList.remove("visible");

function popUp(content){
    alertContainer.innerHTML = content;
    alertContainer.classList.add("visible");
    setTimeout( () => alertContainer.classList.remove("visible"), 2000);
}