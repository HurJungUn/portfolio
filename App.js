class App {
    constructor(){
        let list = document.querySelectorAll(".card");
        let hide = document.querySelector("#hide");
        let show = document.querySelector("#show");
        let ul = document.querySelector("#remote-control > ul");
        hide.addEventListener("click", function(){
            ul.style.display = "none";
            hide.classList.add("hidden");
            show.classList.remove("hidden");
        });
        show.addEventListener("click", function(){
            ul.style.display = "block";
            show.classList.add("hidden");
            hide.classList.remove("hidden");
        });
        let clickscroll = document.querySelector("#name");
        // usb참고
        // clickscroll.addEventListener("click", function(){

        //     window.scrollY = 1000;
        //     console.log(window.scrollY);
        // });
        this.cardList = [];
        list.forEach(x => {
            let p = x.dataset.percent;
            let c = x.querySelector("canvas");
            this.cardList.push(new Card(c, p));
        });

        this.isDrawed = false;
        this.p = document.querySelector("#portfolio");
        
        window.addEventListener("scroll", this.scrollHandle.bind(this));
    }

    scrollHandle(e){
        if (window.scrollY + window.innerHeight > this.p.offsetTop && !this.isDrawed) {
            this.draw();
            this.isDrawed = true;
        } else if(window.scrollY + window.innerHeight <= this.p.offsetTop){
            this.nondraw();
            this.isDrawed = false;
        }
    }

    draw(){
        this.cardList.forEach(x => x.start());
    }

    nondraw(){
        this.cardList.forEach(x => x.stop());
    }
}

window.onload = function() {
    let app = new App();
}