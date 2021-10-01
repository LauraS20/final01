document.addEventListener('DOMContentLoaded', () =>{

const cardArray = [
    { title: 'strawberry', img: 'images/zemene.png'}, 
    { title: 'strawberry', img: 'images/aardbei.png'}, 
    { title: 'apple', img: 'images/abols.png'}, 
    { title: 'apple', img: 'images/appel.png'}, 
    { title: 'orange', img: 'images/apelsins.png'}, 
    { title: 'orange', img: 'images/sinaasappel.png'}, 
    { title: 'watermelon', img: 'images/arbuzs.png'}, 
    { title: 'watermelon', img: 'images/watermeloen.png'}, 
    { title: 'cherry', img: 'images/kirsis.png'}, 
    { title: 'cherry', img: 'images/kers.png'}, 
    { title: 'grapes', img: 'images/vinogas.png'}, 
    { title: 'grapes', img: 'images/druiven.png'}, 
    { title: 'banana', img: 'images/banans.png'}, 
    { title: 'banana', img: 'images/banaan.png'}, 
    { title: 'tangerine', img: 'images/mandarins.png'}, 
    { title: 'tangerine', img: 'images/mandarijn.png'},
    // { title: 'cocos', img: 'images/kokosrieksts.png'}, 
    // { title: 'cocos', img: 'images/kokosnoot.png'}, 
]

// shuffle cards
for (let i = cardArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = cardArray[i];
    cardArray[i] = cardArray[j];
    cardArray[j] = temp;
// make pairs of cards 
}

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

// create board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) { 
        let card = document.createElement('img');
        card.setAttribute('src', 'images/background.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

// check for match
function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute(cardsChosen[0], cardsChosen[1]); 
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/background.png');
        cards[optionTwoId].setAttribute('src', 'images/background.png');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = ' well done!';
    }
}

// flip card
function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].title);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

createBoard();

// refresh game
// let refresh = document.querySelector('.restartBtn'); 

// play another game the same level
//  document.querySelector('.newsetBtn');

// play more difficult game
//  document.querySelector('.nextlevelBtn');

})