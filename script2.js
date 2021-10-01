document.addEventListener('DOMContentLoaded', () =>{

    const card2Array = [
        { title: 'onion', img: 'images/sipols.png'}, 
        { title: 'onion', img: 'images/ui.png'}, 
        { title: 'garlic', img: 'images/kiploks.png'}, 
        { title: 'garlic', img: 'images/knoflook.png'}, 
        { title: 'radish', img: 'images/rediss.png'}, 
        { title: 'radish', img: 'images/radijs.png'}, 
        { title: 'beetroot', img: 'images/biete.png'}, 
        { title: 'beetroot', img: 'images/biet.png'}, 
        { title: 'carrot', img: 'images/burkans.png'}, 
        { title: 'carrot', img: 'images/peen.png'}, 
        { title: 'chili', img: 'images/cili.png'}, 
        { title: 'chili', img: 'images/chili.png'}, 
        { title: 'cucumber', img: 'images/gurkis.png'}, 
        { title: 'cucumber', img: 'images/augurk.png'}, 
        { title: 'eggplant', img: 'images/baklazans.png'}, 
        { title: 'eggplant', img: 'images/aubergine.png'}
    ]
    
    // shuffle cards
    for (let i = card2Array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = card2Array[i];
        card2Array[i] = card2Array[j];
        card2Array[j] = temp;
    }
    
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    
    // create board
    function createBoard() {
        for (let i = 0; i < card2Array.length; i++) { 
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
        if (cardsWon.length === card2Array.length/2) {
            resultDisplay.textContent = ' nothing can stop you now!';
        }
    }
    
    // flip card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(card2Array[cardId].title);
        cardsChosenId.push(cardId);
        this.setAttribute('src', card2Array[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
    
    createBoard();
    
    })