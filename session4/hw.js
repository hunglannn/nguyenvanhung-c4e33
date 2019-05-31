//câu 1
//create arrays inside arrays, known as nested arrays

// câu 2
// a list store can both integers and strings in it

//exercise1
// let inventory = {
//     gold : 500,
//     pouch : ['flint', 'twine', 'gemstone'],
//     backpack : ['xylophone', 'dagger', 'bedroll', 'bread loaf']
// }
// inventory.pocket = ['seashell', 'strange berry', 'lint'];
// inventory.backpack.splice(1,1);
// inventory.gold = inventory.gold + 50;
// console.log(inventory);

//exercise2
// let table = [
//     {   name: "prices",
//         banana: 4,
//         apple: 2,
//         orange: 1.5,
//         pear: 3,
//     },
//     {
//         name: "stock",
//         banana: 6,
//         apple: 0,
//         orange: 32,
//         pear: 15,
//     }
// ]

//exercise3
// let items = ["T-Shirt", "Sweater"];
// let ans = prompt ("Welcome to our shop, what do you want (C, R, U, D)?");
// if ( ans.toLowerCase() === "r"){
//     console.log("Our items:", items)
// }
// else if ( ans.toLowerCase() === "c"){
//     let newitems = prompt ("Enter new item")
//     let neww = items.push(newitems)
//     console.log(items)
// }
// else if ( ans.toLowerCase() === "u") {
//     let position = Number (prompt ("Update position"));
//     let newitem = prompt ("New items")
//     items[position-1] = newitem
//     console.log(items)
// }
// else if ( ans.toLowerCase() === "d") {
//     let position1 = Number( prompt ("Delete position"));
//     items.splice(position1 -1, 1 )
//     console.log(items)
// }
// else {
//     console.log("Not availabe")
// }

//exercise4
let sheep = [5, 7, 300, 90, 24, 50, 75];
console.log(`Hello, my name is Hiep and these are my sheep sizes ${sheep}`)
console.log(`Now my biggest sheep has size ${Math.max(...sheep)} let shear it`);
let x = sheep.indexOf(Math.max(...sheep));
sheep[x] = 8
console.log(`After shearing, here is my flock ${sheep}`);
let z = sheep.map(sheep => sheep +50)
console.log(`One month has passed, now here is my flock ${z}`)