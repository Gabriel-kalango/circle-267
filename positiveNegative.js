function posiiveNegative(){
let integaer1=Number(prompt("choose a number"))
let integaer2=Number(prompt("choose another number"))
if (typeof integaer1==="number" && typeof integaer2==="number"){
if(integaer1>0){
    console.log(`${integaer1} is positive`)

}
else if (integaer1<0){
    console.log(`${integaer1} is negative`)

}
else{console.log(`${integaer1} is neither positive `)}
if(integaer2>0){
    console.log(`${integaer2} is positive`)

}
else if(integaer2>0){
    console.log(`${integaer2} is positive`)

}
else(console.log(`${integaer2} is neither positve or negative`))
}
else{console.log("omission")}
}


posiiveNegative()

