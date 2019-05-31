// let dic = {
//     hc: "học",
//     ng: "người",
//     pt: "phát triển",
//     ns: "nói",
//     r: "rồi",

// }
// console.log(dic);
// let answer = prompt("Your code");
// if (dic.hasOwnProperty(answer)){
//     console.log(dic[answer])
// }
// else{
//     let contribute = prompt("Not found. Do u want Y/N")
//     if (contribute.toLowerCase() === "y"){
//     let translate = prompt ("Translation");
//     dic[answer] = translate;
//     console.log(dic);
// }
// else{
//     console.log("Goodbye!")
// }
// }

// let salarytable = [
//     {
//         name: "Duc",
//         salary: 50,
//         hours: 5,
//         days: 24,
//     },
//     {
//         name: "Hung",
//         salary: 70,
//         hours: 4,
//         days: 27,
//     },
//     {
//         name: "Kien",
//         salary: 80,
//         hours: 7,
//         days: 20,
//     }
// ]
// let total = 0;
// console.log(salarytable)
// salarytable.forEach((person, index) => {
//     let monthsalary = person.salary * person.hours * person.days
//     console.log(`Lương tháng của ${person.name} là ${monthsalary}`)
//     total += monthsalary;
// }) 
// console.log(`Tổng lương của 3 người là ${total}`)