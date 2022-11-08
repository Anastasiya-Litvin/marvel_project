async function getCharacter(){
    const res = await fetch('https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=9e02a33fd09f83ed5d174047d6b2908b&hash=3a2f845c80eee3939816c87b12c84829')
    const json = await res.json()
    return json
}

async function setChar(){
    const char = await getCharacter()
    const wrapper = document.createElement('div')
    const main_block = document.getElementById('main')
    wrapper.className = 'heros'
    main_block.append(wrapper)
    for (let i=0; i<9; i++){
        let obj = char.data.results
        let name = obj[i].name 
        let url1 = obj[i].thumbnail.path
        let url2 = obj[i].thumbnail.extension
        wrapper.innerHTML += `<div class="card_hero">
    <img class="hero_img" src="${url1}.${url2}" alt="#">
    <div class="name_hero">${name}</div>
    </div>`
    }
}
setChar()