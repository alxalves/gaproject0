const gameOver= () =>{
    document.querySelector("#gameover").style.display = "block"
    clearInterval(Kirby.timers.age)
    clearInterval(Kirby.timers.boredom)
    clearInterval(Kirby.timers.hunger)
    clearInterval(Kirby.timers.sleepiness)
    setTimeout(function(){
        Kirby.age.reset()
        Kirby.boredom.reset()
        Kirby.sleepiness.reset()
        Kirby.hunger.reset()
    },2500)
}

class attribute {
    //default to causing game over unless specified
    constructor (start,tag,gameOver = true){
        this.start = start
        this.tag= tag
        this.gameOver = gameOver;
    }
    add(){
        this.start++;
        this.tag.innerText = this.start;
        if (this.start>=10 && this.gameOver == true ) {
           gameOver()
        } 
    }
    subtract(){
        if (this.start !== 0){
            this.start--;
            this.tag.innerText = this.start;
        }
    }
    reset (){
        this.start =0;
        this.tag.innerText = this.start;
    }
    

}
class pet {
    constructor(){
        //age does not cause game to end, so passing gameOver as false
        this.age= new attribute(0,document.querySelector("#age"), false)
        this.hunger= new attribute(0,document.querySelector("#hunger"))
        this.sleepiness= new attribute(0,document.querySelector("#sleepiness"))
        this.boredom= new attribute(0,document.querySelector("#boredom"))
        this.timers={}

        this.startTimer();
    }
    startTimer(){
        let pet = this;
        this.timers.age= setInterval(function(){
           pet.age.add() 
        }, 500) 
        this.timers.boredom = setInterval(function () {
            pet.boredom.add()
        }, 5000)
        this.timers.hunger = setInterval(function () {
            pet.hunger.add()
        }, 3000)
        this.timers.sleepiness = setInterval(function () {
            pet.sleepiness.add()
        }, 1500)
    }
}

let Kirby = new pet();