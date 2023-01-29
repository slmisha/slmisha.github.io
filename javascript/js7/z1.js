/*let mass = [1,23,6,89,00]

console.log(mass.indexOf(1));
mass.push(88);
mass.unshift(77);
mass.pop();
mass.shift();
mass.indexOf();*/
let password = 1122;
let x = 3;

for(i=0;i<3;i++) {
   
    
if (password == Number(prompt(`Ведіть пароль.Залишилося- ${x} спроби.`))){
alert(`yes`)
break;

}else{
    x--;

    alert(`No`)

}
}
if(x==1){

alert(`1122`)
}

