let cards = [];

function addCard() {
  const cardName = document.getElementById('cardName').value;
  if (cardName) {
    cards.push(cardName);
    const cardContainer = document.getElementById('cardContainer');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.textContent = cardName;
    cardDiv.onclick = () => revealCard(cardDiv);
    cardContainer.appendChild(cardDiv);
    document.getElementById('cardName').value = '';
  }
}

function shuffleCards() {
  cards = shuffleArray(cards);
  const cardDivs = document.querySelectorAll('.card');
  for (let i = 0; i < cardDivs.length; i++) {
    cardDivs[i].textContent = '';
    cardDivs[i].classList.add('hidden');
  }
}

function revealCard(cardDiv) {
    const index = Array.from(cardDiv.parentNode.children).indexOf(cardDiv);
    cardDiv.textContent = cards[index];
    cardDiv.classList.remove('hidden');
    cardDiv.classList.add('flip');
    setTimeout(() => {
        cardDiv.textContent = cards[index];
        cardDiv.classList.remove('flip');
    });
  }

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const menuIcon = document.querySelector('.nav__menu');
const menu = document.querySelector('.nav__items');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuIcon.classList.toggle('active');
});
