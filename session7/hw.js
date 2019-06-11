let context = {
    users: null
}

window.onload = async () => {
    await getusers()
    renderuser ()
    salary ()
}
 const getusers = async () => {
     const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
     const data = await response.json()
     context.users = data;
    console.log(data);
    }

 const renderuser = () => {
    let li = document.getElementById("li")
    for ( let i =0; i <context.users.length; i ++) {
        let first = `<li id = "user-${i}"> ${context.users[i].employee_name}  </li>`
        li.innerHTML +=  first
 }}

const salary = () => {
    for (let i = 0; i = context.users.length; i ++) {
    let employees = document.getElementById(`user-${i}`);
    let divinfo = document.getElementById('div');
    employees.addEventListener('click', () =>{
        divinfo.innerHTML = "";
        let employeesinfo = `
        <span> "${context.users[i].salary}" </span> <br>
        `
        divinfo.innerHTML += employeesinfo
    })
}}
