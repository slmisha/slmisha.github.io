
let klava={
name:"klava super purer",
cina:112200 ,
Action:true,
vidgug:204,
Image: "z1-2.jpg"
}
let klavae2={
    name:"klava super purer",
    cina:126 ,
    Action:true,
    vidgug:6,
    imagerr: "z1-4.jpg"
}

let products=document.getElementById(`products`)
let cards = `
<div class="card">

<div class="card_image">
    <img src="${klava.Image}" alt="">
</div>

<div class="card_info">
    <div class="name">

        ${klava.name}
    </div>
    
    <div class="reviews">
    ${klava.vidgug} відгуки
    </div>
    
    <div class="price">
    ${klava.cina}&#8372;
    </div>
</div>
</div>   
`

cards+=`
<div class="card">
<div class="card_image">
    <img src="${klavae2.imagerr}" alt="">
</div>

<div class="card_info">
    <div class="name">

        ${klavae2.name}
    </div>
    
    <div class="reviews">
    ${klavae2.vidgug} відгуки
    </div>
    
    <div class="price">
    ${klavae2.cina}&#8372;
    </div>
</div>
</div>   
`
products.innerHTML = cards;
let ba11=0;
let ba12=0;
if(klava.cina < klavae2.cina ){
    ba11 =klava.cina - klavae2.cina;
}else{
    ba12 =klava.cina- klavae2.cina;
}