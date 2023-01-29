let calendar = document.getElementById(`calendar`)
let x = prompt(`клендар дня `);
let pop=0;
if(x==`квітень`|| x==`вересень` || x==`червень` || x==`лютий`
|| x==`травень`|| x==`жовтень`|| x==`гркдень`|| x==`листопад`|| x==`серпень`|| x==`січень`
|| x==`березень`|| x==`червень`){
    pop=30
}else if (x=="лютий"){
    pop=28
}else if (x=="квітень"){
    pop=30
}else if (x=="травень"){
    pop=31
}else if (x=="серпень"){
    pop=31
}else if (x=="грудень"){
    pop=31
}else if (x=="листопрад"){
    pop=30
}else if (x=="жовтень"){
    pop=31
}else if (x=="вересень"){
    pop=30
}else if (x=="липень"){
    pop=31
}else if (x=="лютий"){
    pop=28
}






let days=``;
for(i=0;i<32;i++){
    if(i%7==0 || i%7==6) {
    days +=`<div id="card" class="day">
${i}<br>
січня
</div> 
`
    } else{` 
        days +=
<div class="day">
    ${x}<br>
січня
</div> `
}
}
calendar.innerHTML= days 

