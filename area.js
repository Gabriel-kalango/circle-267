class Area{
    constructor()
    {this.length1=6
    this.length2=7
this.length3=5}



area1(){
    let s=(this.length1 + this.length2 + this.length3) / 2;
    return Math.round(Math.sqrt(s * (s - this.length1) *
                    (s - this.length2) * (s - this.length3)))
}


}
let area= new Area()
console.log(area.area1())
