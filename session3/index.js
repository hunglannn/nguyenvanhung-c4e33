// //array
// let foods = ["com", "pho", "ghe", "rau", "chao"];

// //index ( vi tri)
// console.log(foods[0])

// //length of array
// console.log(foods.length)

// //1.create
// //insert item
// let newfood = "ca"
// foods.push(newfood);
// console.log(foods)

// let favorite = ["death note", "netflix", "teaching"]
// let x = prompt(" Name of thing you want to add");
// favorite.push(x);
// console.log(favorite)

// 2.read
// 2.1 read one
// console.log(foods[3]);
//2.2 read many
// for ( let i = 0; i< foods.length; i ++){
//     console.log(`${i+1}. ${foods[i]}`)
// }

// //way2
// foods.forEach((food, index) =>{
//     console.log(`${index+1}.${food}`)
// })

//3. update
// foods[1] = "bun"
// console.log(foods)


//4.DELETE 
//delete by index
// console.log(foods);
//  foods.splice(indexDelete, 1);
// console.log(foods);
 
//delete by value
// let valueDelete = "com"
// let indexDelete = foods.indexOf(valueDelete);
// foods.splice(indexDelete, 1);
// console.log(foods)