let spiner = document.getElementById("spiner")
let list = document.getElementById("list")
let articles = [];

db.collection('articles').get().then(res=> {
res.forEach(doc=>{
    let stat = doc.data();
    stat.id = doc.id;
    drawArticle(stat)

})
})

function drawArticle(info){
let card = document.createElement('div');
card.classList.add('card')

let card_header = document.createElement('div');
card.classList.add('card_header')
card_header.innerText = info.title

let card_body = document.createElement('div');
card.classList.add('card_body')

let card_text = document.createElement('p');
card.classList.add('card_text')
card_text.innerHTML = info.article

let avtor = document.createElement('a');
avtor.classList.add('btn')
avtor.classList.add('btn-primary')
avtor.href = info.author

card_body.appendChild(card_text)
card_body.appendChild(avtor)
card.appendChild(card_header)
card.appendChild(card_body)
document.getElementById('list').appendChild(card)


}