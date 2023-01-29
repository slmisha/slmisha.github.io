function dravcard(){
let cards = document.getElementById(`cards`);
let input = document.getElementById(`cards_num`).value;
let vidro = ``;
for(i=0;i<input;i++){
vidro += `
<div class="card">
		  <div class="card-body my-2">
			<h5 class="card-title">Card ${i+1} </h5>
		  </div>
		</div>
`
}
cards.innerHTML = vidro;
}
function change(){
let cards_text = document.getElementById(`cards_text`).value;
let cards_class = document.getElementsByClassName(`card`);
let edit_order = document.getElementById(`edit_order`).value;
Array.from(cards_class).map(function(kartopla, index){

if((index+1) % edit_order == 0){
    kartopla.style.color= cards_text;
}
})


}
function bolt(){
let cards_fon = document.getElementById(`cards_fon`).value;
let cards_class = document.getElementsByClassName(`card`);
Array.from(cards_class).map(function(kartopla){
    kartopla.style.background= cards_fon
    })

}
function delate() {
    let cards = document.getElementById(`cards`).innerHTML = ``;
        
}
function delatet() {
    let cards = document.getElementById(`cards`).innerHTML = ``;
    let cards_class = document.getElementsByClassName(`card`);  
    Array.from(cards_class).map(function(kartopla){
    kartopla.style.color=""  
    kartopla.style.background=""
    })   

}
