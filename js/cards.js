const cardForm = document.querySelector("#card__input")
const cardList = document.querySelector(".cards__list")
const in__face = document.querySelector("#input__face")
const shuff = document.querySelector(".card__shuffle")

let cardsArr = []
isShuff = false

cardForm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const card = in__face.value

    if(card==""){
        return
    }

    cardsArr.push(card)
    createCard(card)

    cardForm.reset()
    in__face.focus
})

shuff.addEventListener("click", () => {
    isShuff = true
    let size = cardsArr.length
    for (let i = size - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cardsArr[i], cardsArr[j]] = [cardsArr[j], cardsArr[i]];
    }

    const element = document.querySelectorAll(".cards")
    element.forEach((card, index) => {
        const h3 = card.querySelector("h3");
        h3.textContent = cardsArr[index];
      })

})

while(isShuff){
    const card = document.getElementById('my-card');

    card.addEventListener('click', function() {
        card.classList.toggle('card-flipped');
    });
}

function createCard(card){
    const cardEl = document.createElement('li')

    const cardElMarkup =

    `
    <div class="cards" id="my-card">
        <div class="card-front">
            <h3 class="card__content">${card}</h3>
        </div>
        <div class="card-back">
            <h1>?</h1>
        </div>
    </div>
    `

    cardEl.innerHTML = cardElMarkup
    cardList.appendChild(cardEl)
}


