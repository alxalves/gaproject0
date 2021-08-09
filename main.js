class attribute {
    constructor (start,tag){
        this.start = start
        this.tag= tag
    }
    add(){
        this.start++;
        this.tag.innerText = this.start;
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
    constructor


}