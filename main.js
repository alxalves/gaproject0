class attribute {
    constructor (start,tag){
        this.start = start
        this.tag= tag
    }
    add(){
        this.start++;
        this.tag.innerText = this.start;
        if (this.start==10) {
            this.reset()
            document.querySelector("#gameover").style.display="block"
        } 
    }
    subtract(){
        this.start--;
        this.tag.innerText = this.start;
    }
    reset (){
        this.start =0;
        this.tag.innerText = this.start;
    }
    

}
class pet {
    constructor(){
        this.age= new attribute(0,)

    }


}