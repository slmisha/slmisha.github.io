let text= document.getElementById(`text`);
let name = prompt(`як вас звати`);
let X = document.getElementById(`imya`)
let login =true;

if(login == true){
text.innerHTML =`<h1 align="center">Вітаю  ${name}  На вашуьлисьову скриньку надійшло lodfg@gmail.com відправлен лист <br> із підверженням   лист</h1>`;
X.innerHTML=`${name}`;
console.log(text )
}else{
text.innerHTML=`<h1 align="center">Будьласка . увійдіть в акаунт </1h>`
x.innerHTML=`Увійти`;
}