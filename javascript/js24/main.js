function drawCards(array){
let cards = document.getElementById(`cards`)
let phones_html = ``;
array.map(function(phone){
//console.log(phone)
if(phone.action){
    akcia = `<div class="action">Акція</div>`

}else{
    akcia = ``
}
phones_html += ` 
<div class="card">
    ${akcia}
    <img src="${phone.image}">
    <div class="card-body">
        <h6 class="card-title">${phone.name}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Виробник:</b> <span>${phone.developer}</span></li>
            <li class="list-group-item"><b>Відгуків:</b> <span>${phone.reviews}</span></li>
            <li class="list-group-item"><b>Ціна:</b> <span>${phone.price}₴</span></li>
        </ul>
    </div>
    <div class="card-body price">
        <a href="#" class="card-link">В корзину</a>
        <a href="#" class="card-link">Придбати</a>
      </div>
</div>


`
})


cards.innerHTML = phones_html;
}
drawCards(phones)
function findDevelopers(){
    let developers =[];
    phones.map(function(phone){
        phone.developer
        if(developers.indexOf(phone.developer) == -1){
developers.push(phone.developer)

        }
    })
    console.log(developers)
    let datalistOptions = document.getElementById(`developer`);
    let options = ``;
    developers.map(function(dev){
options += ` <option value="${dev}">`

    })
    datalistOptions.innerHTML = options
}
findDevelopers()

function saveFilter(){
 let filter = {
    developer: document.getElementById(`developer`).value ,
    max_price: document.getElementById(`max`).value ,
    min_price: document.getElementById(`min`).value ,
    name: document.getElementById(`name`).value ,
    order: document.getElementById(`order`).value
    
 }
 console.log(filter)
 showProducts(filter)
 localStorage.setItem(`settings`, JSON.stringify(filter))
}
function showProducts(filter_obj){
    let new_phones = phones.slice();
    if(filter_obj.name > 0){
      new_phones = new_phones.filter(function(phone){
       return  phone.name.includes(filter_obj.name)
      })  
    }
    if(filter_obj.developer.length > 0){
        new_phones = new_phones.filter(function(phone){
            return  phone.developer == filter_obj.developer
           })
    }
    if(filter_obj.min_price.length > 0){
        new_phones = new_phones.filter(function(phone){
            return  phone.price >= filter_obj.min_price
           })
        }
        if(filter_obj.max_price.length > 0){
            new_phones = new_phones.filter(function(phone){
                return  phone.price <= filter_obj.max_price
               })
            }
            if(filter_obj.reviews > 0 && filter_obj.order == `reviews`){
                new_phones = new_phones.sort (function(a,b){
                    return a.reviews - b.reviews
                })
            }
            if(filter_obj.reviews > 0 && filter_obj.order == `price`){
                new_phones = new_phones.sort (function(a,b){
                    return a.price - b.price
                })
            }

drawCards(new_phones)


  


}
 let filter =  JSON.parse(localStorage.getItem(`settings`))
 
 if(filter){
 showProducts(filter)
 }else{
    drawCards(phones)
 }