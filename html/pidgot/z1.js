let igor = [];
for(i=0;i<50;i++){
igor.push(`вася ${i}`)
}
console.log(igor)
let table = document.getElementById(`table`);
let cop =``;
for(i=0;i<igor.length;i++){
    if((i%2=)= 0  ){
        
    cop +=`
    <tr>
    <td>${i+1}</td>
    <td>${igor[i]}</td>

        </tr>   
    `
}else if(i%7== 0) {
cop +=`
    <tr class="yellow" >

    <td>${i+1}</td>
    <td>${igor[i]}</td>

        </tr>   
    
    `
}else{
<tr class="red" >

<td>${i+1}</td>
<td>${igor[i]}</td>

    </tr>   

}
}
table.innerHTML = cop ;