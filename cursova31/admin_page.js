function add_tovar(){
let towar = {
name1: name1.value,
rozmir:rozmir.value,
price:price.value,
numbers:odag_numbers.value,
material:material.value,
img:img.value,
type_name:type.value,
men_women:men_women.value,
colection:colection.value
}
db.collection('all_tovars').add(towar).then(res=>{
console.log(`Welcom`)

document.getElementById('modal1').style.display ='none';
window.location.reload();
})

}