class Slider {
    constructor(id){
        this.id = id;
        this.slides = ["diapo1.jpg", "diapo2.jpg", "diapo3.jpg", "diapo4.jpg"];
        this.slideCursor = 0;
        this.play = false ;
    }

   init(){
    const slider = document.getElementById("slider");
    const closeSliderBtn = document.getElementById("closeSliderBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const startBtn = document.getElementById("startBtn");
    const helpBtn = document.getElementById("helpBtn");
    startBtn.onclick = () => mySlider.togglePause();
    prevBtn.onclick = () => mySlider.previousSlide();
    nextBtn.onclick = () => mySlider.nextSlide();
    closeSliderBtn.onclick = () => mySlider.closeSlider();
    document.addEventListener("keydown", (e) => mySlider.keyDown(e));
    helpBtn.onclick = () => mySlider.toggleSlider();
    this.sliderStart();
    }

    sliderStart(){
        if (sessionStorage.getItem("sliderViewed") != "true"){
            slider.classList.add("visible");
            clearInterval(this.sliderInterval);
            this.sliderInterval = setInterval(this.autoSlide.bind(this), 5000);
        }
    }

    autoSlide(){
        this.play = true;
        diapo.style.opacity = "0"; 
        setTimeout(() => {
            diapo.style.opacity = "1";
            this.slideCursor < this.slides.length-1 ? this.slideCursor ++ :
                this.slideCursor = 0;
            let content = "url('./img/" + this.slides[this.slideCursor] + "')";
            this.id.style.background = content;
        }, 300);
    }

    nextSlide(){
        clearInterval(this.sliderInterval);
        diapo.style.opacity = "0"; 
        setTimeout(() => {
            diapo.style.opacity = "1";
            this.slideCursor < this.slides.length-1 ? this.slideCursor ++ : 
                this.slideCursor = 0;
            let content = "url('./img/" + this.slides[this.slideCursor] + "')";
            this.id.style.background = content;
            startBtn.innerHTML = "<i class='iconify' data-icon='mdi:play'></i>";
        }, 300);
    }

    previousSlide(){  
        clearInterval(this.sliderInterval);
        diapo.style.opacity = "0"; 
        setTimeout(() => {
            diapo.style.opacity = "1";
            this.slideCursor > 0 ? this.slideCursor -- :
            this.slideCursor = 3;
            let content = "url('./img/" + this.slides[this.slideCursor] + "')";
            this.id.style.background = content;
            startBtn.innerHTML = "<i class='iconify' data-icon='mdi:play'></i>";
        }, 300);
    }

    togglePause(){
        clearInterval(this.sliderInterval);
        if (this.play == true){
            this.play = false;
            startBtn.innerHTML = "<i class='iconify' data-icon='mdi:play'></i>";
        }
        else{
            this.play = true;
            this.sliderInterval = setInterval(this.autoSlide.bind(this), 5000);
            startBtn.innerHTML = "<i class='iconify' data-icon='mdi:pause'></i>";
        } 
    }

    keyDown(e){
        if(e.keyCode === 37){
            this.previousSlide();
        }
        else if(e.keyCode === 39){
           this.nextSlide();
        }
    }

    closeSlider(){
        slider.classList.remove("visible");
        sessionStorage.setItem("sliderViewed", "true");
    }

    toggleSlider(){
        if (slider.classList.contains("visible")){
            slider.classList.remove("visible");
            clearInterval(this.sliderInterval);
            this.play = false;
        }
        else{   
            slider.classList.add("visible");
            clearInterval(this.sliderInterval);
            this.play = true;
            this.sliderInterval = setInterval(this.autoSlide.bind(this), 5000);
        }  
    }
}