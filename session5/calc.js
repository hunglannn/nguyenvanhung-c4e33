let calc = (x, y, opp) =>{
 let result = 0
 if ( opp === "+"){
    result = x +y
}
else if ( opp === "-"){
    result = x- y
}
else if ( opp === "*"){
    result = x*y
}
else {
    result === x/y
}
return result
} 

let checkans = (kq ,tf) =>{
    let notice = "";
    if (kq === 0){
        if (tf ==="t"){
            notice = "true"
        }
        else if (tf === "f")
        notice ="false"
    }
    else {
        if (tf === "t"){
            notice = "false"
        }
        else 
        {
            notice = "true"
        }
    }
    return notice
}