function sign_in_up_google(){
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    
  
   

     
      var user = result.user;
     console.log(user)
       
    }).catch((error) => {
      
      var errorCode = error.code;
      var errorMessage = error.message;
      
      var email = error.email;
   console.log(errorCode)
   console.log(errorMessage)
   console.log(email)
    });
    
}  

function reg(){
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    
    // Signed in 
    var user = userCredential.user;
    data_reg(user.uid)
    // ...

    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorCode)
    
    console.log(errorMessage)
  });
  }

  function data_reg(id){
let user = {
  email: email.value,
  name: names.value,
  phone: phone.value,
  login: login.value
}
db.collection('userinfo').doc(id).set(user).then(res => {
alert('віттаю')

})
  }   
  function email_log(){
    firebase.auth().signInWithEmailAndPassword(email_vhid.value, password_vhid.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  }

