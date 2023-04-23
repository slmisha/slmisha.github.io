
  let uchni = []

  db.collection(`nd12`).get().then(res => {
    res.forEach(doc => {
        let user = doc.data()
        user.id = doc.id
        uchni.push(user)
    })
    user()
})
console.log(uchni)

function user(){
let puple = document.getElementById(`puple`)
let puple_list = '';
uchni.map(function(list){ 
  puple_list +=`
<tr>
 
 <th>${list.name}</th>
 <th>${list.lastname}</th>
 <th>${list.email}</th>
 <th>${list.phone}</th>

</tr>

`

})
puple.innerHTML=puple_list;
}
