let integar1=Number(prompt("choose a number: "))
let integar2=Number(prompt("choose another number: "))
if (typeof integar1==="number" && typeof integar2==="number"){
    if (integar1>integar2){
        alert(`${integar1} is the bigger number`)
    }
    else if (integar1<integar2){
        alert(`${integar2} is the bigger number`)
    }
    else{
        throw new Error("ONE INTEGER MUST BE BIGGER THAN THE OTHER")
    }

}