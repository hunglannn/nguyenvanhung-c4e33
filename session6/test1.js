let namefoods = document.getElementById("namefood")
let click = document.getElementById("clickname")
click.addEventListener("click", () =>{
    let newmenu = document.getElementById("menu")
    let newfood = `<li> ${namefoods.value} </li>`
    newmenu.innerHTML += newfood
})

let deletefoods = document.getElementById("deletefood")
deletefoods.addEventListener("click", () => {
    let newmenu = document.getElementById("menu")
    newmenu.lastElementChild.remove()
})