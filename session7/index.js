// async // await
const context = {
    users : null,
}
window.onload = async () => {
   await getusers();
   renderuser();
   viewinforuser();
}

const getusers = async () => {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json()
    const users = data.data
    context.users = users
}

const renderuser = () => {
    let list = document.getElementById("list")
    for ( let i =0; i <context.users.length; i ++) {
        let first = `<li id = "user-${i}"> ${context.users[i].first_name} ${context.users[i].last_name } </li>`
        list.innerHTML +=  first
}}
 
const viewinforuser = () => {
    for ( let i = 0; i < context.users.length; i ++) {
        let eachuser = document.getElementById(`user-${i}`);
        let divinfo = document.getElementById("name")
        eachuser.addEventListener("click", () =>{
            divinfo.innerHTML = "";
            let eachuserinfo = `
            <img src = "${context.users[i].avatar}"> <br>
            <span> First name: ${context.users[i].first_name} </span> <br>
            <span> Last name: ${context.users[i].last_name} </span> <br>
            <span> Email: ${context.users[i].email} </span>
            `
            divinfo.innerHTML += eachuserinfo
        })
       
    }
    
   
}