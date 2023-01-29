function enter(){
let email = document.getElementById(`email`).value
let password = document.getElementById(`password`).value
let user = JSON.parse(localStorage.getItem(`user`))
if (email == user.mail  && password == user.parol){

    user.loged = true;
    localStorage.setItem(`user`, JSON.stringify(user))
    document.getElementById(`message`).innerHTML =`<div class="alert alert-success col-6"> Успіх </div>`
    window.location = "z3.html"
}else{
    document.getElementById(`message`).innerHTML =`<div class="alert alert-danger col-6">Помилка</div>`
}

}