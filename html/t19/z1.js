function text(){
    let h1 = document.getElementById(`h1`);
    let input = document.getElementById(`input`).value;
    
    
   localStorage.setItem(`priv`,input)
h1.innerHTML = input;

}
function textDraw(){
    let h1 = document.getElementById(`h1`);
    h1.innerHTML =localStorage.getItem(`priv`);

}
textDraw();


