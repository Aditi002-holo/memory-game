// create a memory cards 'array of objects'
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

// get random order of array each time >> little trick used here
cardArray.sort(() => 0.5 - Math.random());

// select the elements  - to be impacted -
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

// initialize variables required to choose cards
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

// creating a card 
function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id', i);

        // listen to the card clicked and call flipCard()
        card.addEventListener('click', flipCard);

        // append the card under grid element
        gridDisplay.appendChild(card);
    }
}

createBoard();

// to check if it's a match
function checkMatch() {
    const cards = document.querySelectorAll('#grid img') // grid >> card (child)

    
    if(cardsChosen[0] === cardsChosen[1]) {
        alert('you found a match');

        // set background white if it's a match
        cards[cardsChosenIds[0]].setAttribute('src','images/white.png');
        cards[cardsChosenIds[1]].setAttribute('src','images/white.png');
        
        // remove click event
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard);

        cardsWon.push(cardsChosen);
    } else {
        // flip the card back to original if not a match
        cards[cardsChosenIds[0]].setAttribute('src','images/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src','images/blank.png');
        alert('sorry try again')
    }
    // display the score
    resultDisplay.innerText = cardsWon.length;

    // empty the arrays - for the next play
    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! you found them all!!'
    }

}

function flipCard() {
    // get card name and id to display after flipping (click & flip)
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);

    // set the image 
    this.setAttribute('src', cardArray[cardId].img);

    // check for a match after every 2 cards are flipped
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
