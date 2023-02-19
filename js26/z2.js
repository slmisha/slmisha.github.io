function drawDevelopers(){
    let list = document.getElementById('list')
    let list_html = '';
    companies.map(function(x){
        list_html += `
        <a href="#" class="list-group-item list-group-item-action devs">${x.name}</a>
        `
    })




    list.innerHTML = list_html;
}
drawDevelopers()
function bg(){
let devs =Array.from(document.getElementsByClassName(`devs`));
console.log(devs)
devs.map(function(dev,index){
    dev.addEventListener(`click`, function(){
        devs.map(function(l){
        l.classList.remove(`active`)
        })
       dev.classList.add(`active`)
       document.getElementById(`info`).innerHTML = `
       <h4>${companies[index].name}</h4>
       <p>
           ${companies[index].info[0]}
       </p>
       <p>
       ${companies[index].info[1]}
       </p>
   
       `
       
    })
    })
}
bg()
 