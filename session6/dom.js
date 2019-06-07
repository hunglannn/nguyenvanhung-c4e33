let h1 = document.getElementById("dom-h1")
console.dir(h1)
h1.innerText = "hello"

let newfood = `<li>phở</li>`
let menu = document.getElementById('menu')

menu.innerHTML += newfood //thêm món
let h2 = document.getElementById('dom-h2')
h2.remove()

let btn = document.getElementById("btn")
btn.addEventListener('click',( ) => {
    console.log("demo")
})
let foodinput =document.getElementById("dominput")
console.dir(foodinput)
foodinput.addEventListener("keyup", () =>{
    console.log(foodinput.value)
})