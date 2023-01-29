let user = {
    name: "Potro",
    lasname:"Ivanov" ,
    age:90,
    emale:"petro.ivanov22@gmail.com",
    city:"Khmelnitsky"
}

function showUser(){
document.getElementById("tbody").innerHTML = `
<tr>
<td>${user.name}</td>
<td>${user.lasname}</td>
<td>${user.age}</td>
<td>${user.emale}</td>
<td>${user.city}</td> 
</tr>
`

}
showUser();
function changeName(imya){
    user.name = imya;
    showUser();
}
 function changeLastName(lol){
 user.lasname = lol;
 showUser();
 }
 function changeAge(lop){
 user.age = lop;
 showUser();
 }
 function changeEmail(email){
    user.emale = email;
    showUser();
 }
function changeCity(city){
    user.city =city
    showUser();
}
function changeUserData(imya, lol,lop, email, city){
    user.name=imya
    user.lasname= lol
    user.age=lop
    user.emale=email
    user.city=city
showUser();
}