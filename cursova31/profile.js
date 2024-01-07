let user_uid = localStorage.getItem('uid');
function input_on(){
    let profile_info = Array.from(document.getElementsByClassName('profile_info'));
   profile_info.forEach(input =>{
    input.removeAttribute('disabled')
   })
   document.getElementById('button_magic').innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" onclick=" upadata_user_info()"  height="24" viewBox="0 -960 960 960" width="24"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>
   `
}


function input_off(){
    let profile_info = Array.from(document.getElementsByClassName('profile_info'));
   profile_info.forEach(input =>{
    input.setAttribute('disabled','')
   })
}
function upadata_user_info(){
let user = {
name: user_name.value ,
lastname: user_lastname.value ,
lake_father: user_po_batkovi.value ,
date: user_date.value,
city: user_city.value,
street: user_street.value,
phone: user_phone.value,
login: user_login.value,
email: user_email.value



}
db.collection('userinfo').doc(user_uid).set(user).then(res =>{
window.location.reload()

})

}
function getDb_user_info(){
db.collection('userinfo').doc(user_uid).get().then(res => {
    let user =  res.data() 
        user_name.value = user.name;
       user_lastname.value = user.lastname;
        user_po_batkovi.value = user.lake_father;
        user_date.value = user.data;
        user_city.value = user.city;
         user_street.value = user.street;
         user_phone.value = user.phone;
        user_login.value = user.login;
         user_email.value = user.email;

})


}
getDb_user_info()







