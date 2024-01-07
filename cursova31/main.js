function getTovars() {
    tovari.innerHTML = '';
    let filter = JSON.parse(localStorage.getItem('filter'));
    if(filter === null){
        db.collection('all_tovars').get().then(res=>{
           
            res.forEach(doc =>{
                let tovar = doc.data();
                tovar.id = doc.id;
                tovar.count = 1;
                drawTovar(tovar)
            })
        })
    }
    let filterer = {
        name1: document.getElementById('name1').value,
        max_price: Number(document.getElementById('max_price').value),
        min_price: Number(document.getElementById('min_price').value),
        vurobnuk: document.getElementById('vurobnuk').value,
        men_women: document.getElementById('men_women').value,
        type_name: document.getElementById('type_name').value,
        rozmir: document.getElementById('rozmir').value
    };

    let filtered_tovars = db.collection('all_tovars');

    if (filterer.name1 !== '') {
        filtered_tovars = filtered_tovars.where("name1", "==", filterer.name1);
    }
    if (filterer.max_price !== 0) {
        filtered_tovars = filtered_tovars.where("price", "<", filterer.max_price);
    }
    if (filterer.min_price !== 0) {
        filtered_tovars = filtered_tovars.where("price", ">", filterer.min_price);
    }
    if (filterer.vurobnuk !== '') {
        filtered_tovars = filtered_tovars.where("vurobnuk", "==", filterer.vurobnuk);
    }
    if (filterer.men_women !== '') {
        filtered_tovars = filtered_tovars.where("men_women", "==", filterer.men_women);
    }
    if (filterer.type_name !== '') {
        filtered_tovars = filtered_tovars.where("type_name", "==", filterer.type_name);
    }
    if (filterer.rozmir !== '') {
        filtered_tovars = filtered_tovars.where("rozmir", "==", filterer.rozmir);
    }

    filtered_tovars.get().then(res => {
        res.forEach(doc => {
            let tovar = doc.data();
            tovar.id = doc.id;
            show_towars(tovar) 
        })
    })
    
            
}
        


getTovars()

function show_towars(tovar){
 
let tovari = document.getElementById('tovari')
tovari.innerHTML += `
    
    <div class="tovar" id="tovar">
    
    <div class="tovar_info">
        <img src="${tovar.img}" alt="" class="kyrtkas">
       <span style=" font-size: 15px;font-weight: bold; color: #333;">${tovar.colection} </span >
        <p>
            Тип: ${tovar.type_name} <br>
            <span class="material">Матеріал:${tovar.material}</span> <br>
            <span class="size">Розмір:${tovar.rozmir}</span> <br>
            <span class="gender">Стать: ${tovar.men_women}</span><br>
            <span class="price">Ціна: ${tovar.price}</span> 
            <button onclick="add_to_cart('${tovar.id}')">Додати в кошик</button>
        </p>
    </div>
    
    </div>
   
    `


}

    
function saveFilter(){
 


    localStorage.setItem('filter' , JSON.stringify(filter))
}
function add_to_cart(id_tovara){
    let shop_cart = get_from_cart();
    console.log(shop_cart)
    db.collection('all_tovars').doc(id_tovara).get().then(res=>{
    let db_tovar = res.data();
    db_tovar.count= 1;
    db_tovar.id = res.id
    console.log(shop_cart)
    let index_v_masive = shop_cart.findIndex(crtka =>{
        console.log(crtka.id)
        console.log(id_tovara)
       return  crtka.id == id_tovara;
    })
    console.log(index_v_masive)
    if(index_v_masive == -1){
shop_cart.push(db_tovar)
localStorage.setItem('cart' , JSON.stringify(shop_cart))
    }else{
shop_cart[index_v_masive].count++;
localStorage.setItem('cart' , JSON.stringify(shop_cart))


    }
            
    })

}
function get_from_cart(){
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(cart === null){
        return []
    }else{
        return cart
    }
}














function sign_out(){
    firebase.auth().signOut().then(() => {
localStorage.removeItem('uid')
      
    }).catch((error) => {
      // An error happened.
    });



  }
  function get_from_cart(){
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(cart === null){
        return []
    }else{
        return cart
    }
  }