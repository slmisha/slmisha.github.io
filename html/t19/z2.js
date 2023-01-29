 function lol(){
    let stored = document.getElementById(`stored_test`);
    let text = document.getElementById(`text`).value;
    localStorage(`untel`,text)
 stored_test.innerHTML = text;

 }