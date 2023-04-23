function login() {
let email = document.getElementById(`username`).value;
let password = document.getElementById(`password`).value;

db.collection('nd12').get().then(function(res){
res.forEach(function(log){
let corustywach = log.data();
corustywach.fbid = log.id;
console.log(corustywach)

 if(corustywach.email == email && password == corustywach.phone){
window.location.href = 'index.html'
localStorage.setItem('log',JSON.stringify(corustywach))


 }
})
})


}
function checkUser() {
  let log = localStorage.getItem('log')
if(log === null){



}else{
    window.location.href = 'index.html'

}

}
checkUser()