class Area{
    constructor()
    {this.length1=6
    this.length2=7
this.length3=5}



area1(){
    let area=0.5*this.length1*this.length2
    return area
}
area2(){
    let area=0.5*this.length1*this.length3
    return area
}
area3(){
    let area=0.5*this.length3*this.length2
    return area
}

}
let area= new Area()
console.log(area.area1())
console.log(area.area2())
console.log(area.area3())