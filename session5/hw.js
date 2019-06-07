// câu 1
// function is a subprogram designed to perform a particular task when they are called. it makes program shorter, less complex and easier

// Defining functions :
// - the name of function
// - list of parameter to the function, enclosed in parentheses and separated by commas
// - The JavaScript statements that define the function, enclosed in curly brackets

// declare function
// Function declaration
// Function expression
// Shorthand method definition
// Arrow function
// Generator function
// Function constructor

// call function
// to call function we use:     name.of.funtion()

// return
// The return statement ends function execution and specifies a value to be returned to the function caller. The expression whose value is to be returned. If omitted, undefined is returned instead.
// we use return to immediately stop a function and a value is tobe return.
// use: return 'expesssion' 
// we should to use return in every function to reuse function

//  to use function from a different file other than our currently working file we call name of function and value in function

// ex2.1
 let sayhello = () =>{
     console.log("Hello world")
     console.log("Hello world")
     console.log("Hello world")
 }
sayhello()

//ex2.3
// clear()
// let drawsquare = (lengh, colorr) =>{
//     color(colorr)
//     for (i = 0; i <=3; i++){
//         fd(lengh)
//         rt(90)
//     }
// }
// square(100, 'red');

//ex2.2
// let xy = (x, y) =>{
//     result = x + y;
//     console.log(result);
// }

// xy(90,100)


//ex2.5
// clear()
// let drawstar = (lengh) =>{
//     rt(18)
//     fd(200)
//     for(i =0; i <4; i ++){
//       rt(144)
//       fd(lengh)
//     }
// }
//   drawstar(200)

// ex2.6

// let remove_dollar_sign = (s) =>{
//     let remove = s.replace(/[$]/g, "")
//     return remove
// }
// console.log(remove_dollar_sign("$$$$$$hello"))

//ex2.7
// let remove_dollar_sign = (s) =>{
//     let remove = s.replace(/[$]/g, "")
//     return remove
// }
// console.log(remove_dollar_sign("$$$$$$hello"))
// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
// if (string_with_no_dollars == "80% percent of life is to show up"){
//     console.log("Your function is correct")}
// else{
//     console.log("Oops, there's a bug")}

//ex2.8
let get_even_list = (l) => {
    let list = []
    for (i = 0; i <= l.length; i++){
        if (l[i] %2 ===  0){
        list.push[i]
    }
    }
}
