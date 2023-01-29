function register(){
let text= document.getElementById(`name`).value
let email= document.getElementById(`email`).value
let password= document.getElementById(`password`).value

if(text.length > 3 && email.includes(`@`) && password.length > 6 ) {
let users = {
login: text ,
mail: email,
parol: password
}
localStorage.setItem(`user`, JSON.stringify(users))
document.getElementById(`message`).innerHTML =`<div class="alert alert-success col-6"> Успіх </div>`
}else{
    document.getElementById(`message`).innerHTML =`<div class="alert alert-danger col-6">Помилка</div>`

}
}