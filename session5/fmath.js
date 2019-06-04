window.onload = () =>{
    let x = Math.floor(Math.random() *(9 - 0));
    let y = Math.floor(Math.random() *(9 - 0));
    let op = ["+", "-", "*", "/"]
    let index = Math.floor(Math.random() *(3 - 0));
    let opp = op[index]
    // let result = 0
    // if ( opp === "+"){
    //     result = x +y
    // }
    // else if ( opp === "-"){
    //     result = x- y
    // }
    // else if ( opp === "*"){
    //     result = x*y
    // }
    // else {
    //     result === x/y
    // }
    let result = calc(x, y, opp)
    let ans = Math.floor(Math.random() *(result +1 - result +1)) + result-1;
    console.log(`${x} ${opp} ${y} = ${ans}`)
    let tf = prompt("true of false?").toLowerCase()
    let kq = result - ans
    console.log(checkans(kq, tf))
}
