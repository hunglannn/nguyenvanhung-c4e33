//ex1
// let array= [1, 4, 1, 64, 128, 5, 4, 7, 32]
// console.log("Dãy số vừa nhập theo chiều ngược:")
// for(let i = array.length-1; i>= 0; i--){
//     console.log(array[i]); 
// }

//ex2
let arr = [128, 2, 4, 2, 16, 128, 64, 4, 7, 4, 64];
for (i= 0; i < arr.length-1; i++){
    let x = arr[0]*arr[i+1]
    if ( x ===256 ){
        console.log(`${arr[0]} và ${arr[i+1]} tại vị trí 1 và ${i+2}`)
    }
}