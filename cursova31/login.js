const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})















function sign_in_up_google(){
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    
  
   
      var user = result.user;
    console.log(user)
     console.log(user.uid)
     db.collection('userinfo').doc(user.uid).get().then(res =>{
if(res._document == null){

let user12 = {
  email: user.email,
  name: user.displayName,
  phone: '',
  login: ''
}
db.collection('userinfo').doc(user.uid).set(user12).then(res => {
  link_uid(user.uid)

})
}else{
  
  link_uid(user.uid)
}
      
     })
       
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
    
    // ...

    link_uid(user.uid)
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
  phone: '',
  login: ''
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
      link_uid(id)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  }
  

  function link_uid(id) {
    setTimeout(function(){
      localStorage.setItem('uid',id);
      window.location.href = `index.html?id=${id}`
    },1500)


  }


  function sign_out(){
    firebase.auth().signOut().then(() => {
localStorage.clear('uid')
      
    }).catch((error) => {
      // An error happened.
    });



  }
