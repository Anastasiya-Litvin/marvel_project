

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

async function getChar(){
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    const res = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=thesoer&apikey=9e02a33fd09f83ed5d174047d6b2908b&hash=3a2f845c80eee3939816c87b12c84829`)
    const char = await res.json()
    console.log(char)
    const cardTitleWhite = document.getElementById('card_title_white')
    const wrapper = document.querySelector('.card_title_white_wrapper')
    const spiner = document.getElementById('spiner')
    
    let obj = char.data.results[0]
    let name = obj.name
    let description = obj.description
    let url1 = obj.thumbnail.path
    let url2 = obj.thumbnail.extension
    cardTitleWhite.innerHTML = `
        <div class="title_white_img">
            <img src="${url1}.${url2}" alt="#">
        </div>
        <div class="title_white_info_hero">
            <div class="white_info_name">${name}</div>
            <div class="white_info_description">${description}</div>
            <div class="white_info_buttons">
                <div class="button_red">HOMEPAGE</div>
                <div class="button_grey">WIKI</div>
            </div>
        </div>`

    console.log(obj)

}
getChar()

const button = document.querySelector('.button_red_get')
button.addEventListener('click', hello)
    function hello(){
        getChar()
    }