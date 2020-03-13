class Canvas{
    constructor(id){
        this.elem = document.getElementById(id); 
        this.context = this.elem.getContext("2d");
        this.position = this.elem.getBoundingClientRect();
        this.drawing = false;
        this.x = 0;
        this.y = 0;
    }

    init(){
        this.elem.addEventListener("mousedown", (e) => this.startdraw(e.clientX , e.clientY ));
        this.elem.addEventListener("mouseup", () => this.stopdraw());
        this.elem.addEventListener("mousemove", (e) => this.drawLine(this.x, this.y, e.clientX , e.clientY));
        this.elem.addEventListener("touchstart", (e) => this.startdraw(e.touches[0].clientX, e.touches[0].clientY));
        this.elem.addEventListener("touchend", () => this.stopdraw());
        this.elem.addEventListener("mouseover", () => this.stopdraw());
        this.elem.addEventListener("touchmove", (e) => this.drawLine(this.x, this.y, e.touches[0].clientX, e.touches[0].clientY));
        document.getElementById("resetBtn").addEventListener("click", (e) => this.reset());
    }

    startdraw(x1,y1){
        this.x = x1 - this.elem.getBoundingClientRect().left;
        this.y = y1 - this.elem.getBoundingClientRect().top;
        this.drawing = true;
    }

    stopdraw(){
        this.drawing = false;
        this.x = 0 ;
        this.y = 0;
    }

    drawLine(x1, y1, x2, y2) {
        if (this.drawing === true) {
            this.context.beginPath();
            this.context.strokeStyle = "black";
            this.context.lineWidth = 3;
            this.context.moveTo(x1, y1);
            this.context.lineTo(x2 - this.elem.getBoundingClientRect().left, y2 - this.elem.getBoundingClientRect().top);
            this.context.stroke();
            this.context.closePath();
            this.x = x2 - this.elem.getBoundingClientRect().left;
            this.y = y2 - this.elem.getBoundingClientRect().top;
            canvasIsFilled = true ;
            submitBtn.removeAttribute("disabled");
        }   
    }

    reset(){
        this.context.clearRect(0, 0, this.elem.width, this.elem.height);
        canvasIsFilled = false ;
        submitBtn.setAttribute("disabled", true);
    }
}


