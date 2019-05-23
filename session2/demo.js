// câu 1 
// Boolean is used to creat true/false statements.

// Boolean(10 > 9); 
// Boolean("Hello");
// Boolean("-10")

// câu 2
// A flowchart is a visual representation of a process.
// In which each step in the process is represented by a different shape and contains a short description of the process step.

// 
// Placing If Statement inside another IF Statement is called JavaScript Nested If Statement.


// câu 3
// let x = Number(prompt("Nhập 1 số"));
// if( x ===0){
//     console.log("là số chẵn")
// }
// else{
//     if(x % 2===0){
//         console.log("là số chẵn")
//     }
//     else{
//          console.log("là số lẻ")
//     }
// }

// hình 1
// clear()

// for (let i = 1; i<5; i ++){
//     rt(60)
//     fd(100)
//     rt(60)
//     fd(100)
//     rt(120)
//     fd(100)
//     rt(60)
//     fd(100)
//     rt(150)
// }


// hình 2
// clear()
// lt(90)
// for (let i=1; i<4; i++){
//   rt(120)
//   fd(100)
// }
// for ( let i = 1; i<5; i++){
// rt(90)
// fd(100)
// }
// for (let i =1; i<6; i++){
// rt(72)
// fd(100)
// }

// for (let i = 1; i< 7; i++){
// rt(60)
// fd(100)
// }

// let x = Number (prompt("Enter your height (cm)"));
// let y = Number (prompt("Enter your weight (kg)"));
// let z = x /100
// let bmi = y / (z * z);
// console.log("Your BMI: ", bmi);
// if(bmi <16){
//     console.log("Severely underweight")
// }
// else if (bmi < 18.5){
//     console.log("Underweigh")
// }
// else if (bmi <25){
//     console.log("Normal")
// }
// else if (bmi <30){
//     console.log("Overweight")
// }
// else {
//     console.log("Obese")
// }

let x = Number(prompt("Enter a number"));
let result = 1;
for ( let i =1;i <= x; i++){
    result = result * i
}
console.log("Result", result)