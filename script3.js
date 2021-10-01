document.addEventListener('DOMContentLoaded', () =>{

    const card3Array = [
        { title: 'orange3', img: 'images/papelsins.png'}, 
        { title: 'orange3', img: 'images/tapelsins.png'}, 
        { title: 'banana3', img: 'images/pbanans.png'}, 
        { title: 'banana3', img: 'images/tbanans.png'}, 
        { title: 'pear3', img: 'images/pbumbieris.png'}, 
        { title: 'pear3', img: 'images/tbumbieris.png'}, 
        { title: 'fourbananas3', img: 'images/pcetribanani.png'}, 
        { title: 'fourbananas3', img: 'images/tcetribanani.png'}, 
        { title: 'twobananas3', img: 'images/pdivibanani.png'}, 
        { title: 'twobananas3', img: 'images/tdivibanani.png'}, 
        { title: 'corn3', img: 'images/pkukuruza.png'}, 
        { title: 'corn3', img: 'images/tkukuruza.png'}, 
        { title: 'greengrapes3', img: 'images/pzalasvinogas.png'}, 
        { title: 'greengrapes3', img: 'images/tzalasvinogas.png'}, 
        { title: 'bluegrapes3', img: 'images/pzilasvinogas.png'}, 
        { title: 'bluegrapes3', img: 'images/tzilasvinogas.png'}
    ]
    
    // shuffle cards
    for (let i = card3Array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = card3Array[i];
        card3Array[i] = card3Array[j];
        card3Array[j] = temp;
    }
    
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    
    // create board
    function createBoard() {
        for (let i = 0; i < card3Array.length; i++) { 
            let card = document.createElement('img');
            card.setAttribute('src', 'images/background2.png');
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
            cards[optionOneId].setAttribute('src', 'images/background2.png');
            cards[optionTwoId].setAttribute('src', 'images/background2.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === card3Array.length/2) {
            resultDisplay.textContent = ' amazing! you did it!';
        }
    }
    
    // flip card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(card3Array[cardId].title);
        cardsChosenId.push(cardId);
        this.setAttribute('src', card3Array[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
    
    createBoard();
    
    })