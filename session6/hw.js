let links = document.getElementById("link");
let clicks = document.getElementById("click");
let showlinks = document.getElementById("showlink")
clicks.addEventListener("click", () => {
    showlinks.href = links.href
})

let removecolour = document.getElementById("removecolor")
let selects = document.getElementById("select")
removecolour.addEventListener("click", () => {
    selects[select.selectedIndex ].remove()
})

