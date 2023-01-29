function dravUsers(){
let users_table = document.getElementById(`users_table`);
let users_html= ``;
users.map(function(user,index){
//console.log(`${index} ${user.name}`)
users_html +=` 
<tr>
<td>${index+1}</td>
<td>${user.name}</td>
<td>${user.email}</td>
<td>
    <button class="btn btn-sm btn-primary" onclick="showModal('${user.id}')">
        Детально
    </button>
</td>
<td>
    <button class="btn btn-danger">Видалити</button>
</td>
</tr>

`
})


users_table.innerHTML = users_html;
}
dravUsers()
function showModal(id){
   let myModal = document.getElementById(`myModal`)
   myModal.style.display= `block`
    let user = findUser(id)
    myModal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4>Повна інформація про користувача</h4>
        <span class="close" onclick="hideModal()">&times;</span>
      </div>
      <div class="modal-body py-3">
        <p><b>Ім'я:</b>${user.name}</p>
        <p><b>Місто:</b>${user.address.city}</p>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Телефон:</b>${user.phone}</p>
        <p><b>Сайт:</b> ${user.website}</p>
        <p><b>Компанія:</b>${user.company.name} </p>
      </div>
      <div class="modal-footer" >
        <button class="btn btn-sm btn-secondary" onclick="hideModal()">Скасувати</button>
        <a class="btn btn-sm btn-success" href="https://www.google.com.ua/maps/@${user.address.geo.lat},${user.address.geo.lng},13.13z">Показати на карті</a>
        <a class="btn btn-sm btn-warning" href="mailto: ${user.email}">Написати email</a>
    </div>
</div>
`
    
}
function hideModal(){
    document.getElementById(`myModal`).style.display= `none`

}
function findUser(id){
let filtered = users.filter(function(user){
return user.id === id
})
return filtered[0];
}
