let foods = ["com", "pho", "ghe", "rau", "chao"];
foods.forEach((f,index) => {
 console.log(`${index+1}. ${f}`)
})
let x = prompt("Do you want to delete?")
if (x.toLowerCase() === "n"){
    console.log("Ok")
}
else if(x.toLowerCase() === "y"){
 let y = prompt (" index or value")
 if ( y === "index"){
     let index = Number(prompt("index"))
     let sl = Number(prompt("amount"))
     foods.splice(index-1, sl)
     console.log(foods)
 }
 else if ( y === "value"){
     let value = prompt ("value")
     let indexdl = foods.indexOf(value)
     let sl = Number(prompt("amount"))
     foods.splice(indexdl, sl)
     console.log(foods)
 }
 else {
     console.log("not available")
 }
}
else {
    console.log("not available")
}