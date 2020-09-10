var numberOfCards = 12; // must be even
var cardsOnBoard = numberOfCards;
var score = 0;
var theFormSubmit = document.getElementById('submit');

// create the cards
function createCards() {
    var cardEl = document.getElementsByClassName('scene')[0];
    var boardEl = document.getElementById('board');
    for (var ind = 0; ind < numberOfCards - 1; ind++){
        var cln = cardEl.cloneNode(true);
        boardEl.appendChild(cln);
    }
}

// listen and flip
function listenAndFlip() {
    var cards = document.getElementsByClassName('card');
    for (var ind = 0; ind < cards.length; ind++){
        cards[ind].addEventListener( 'click', flip);
    }
}

// flip card
var flippedCards = []; // needed?
function flip (e){
    var theCard = e.currentTarget;
    theCard.classList.toggle('is-flipped');
    checkPair();
}

// Randomize array in-place using Durstenfeld shuffle algorithm
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// create new img array of the images that we will use
var newImgArray = []

// copy from the old array and double
function copyAndDouble() {
    for (var ind = 0; ind < numberOfCards; ind +=2) {
        newImgArray[ind] = imgArray[ind];
        newImgArray[ind + 1] = imgArray[ind];
    }
}

// put the src in the images
var images = document.getElementsByTagName('img');
function putSrc() {
    for (var ind = 0; ind < numberOfCards; ind++){
       images[ind].src = newImgArray[ind];
    }
}

// setup the board
function setupBoard(eventEl) {
    var nameOfPlayer = eventEl.currentTarget.id;
    alert (nameOfPlayer);
    if (nameOfPlayer == 'Vova') {
        vovaImages();
    }
    else {
        ianImages();
    }
    setup();
}

function setup() {
    document.getElementById('board').style.display = 'flex';
    cardsOnBoard = numberOfCards;
    createCards();
    listenAndFlip();
    shuffleArray(imgArray);
    copyAndDouble();
    shuffleArray(newImgArray);
    putSrc();
    for (var ind = 0; ind < bottuns.length; ind++){
        bottuns[ind].style.display = 'none';
    }
}

// flip back a pair of cards
function flipCards(card1, card2) {
    card1.classList.toggle('is-flipped');
    card2.classList.toggle('is-flipped');
}

// hide a pair of cards
function hideCards(card1, card2){
    cardsOnBoard -= 2;
    card1.className = 'card_pair';
    card2.className = 'card_pair';
}

// when you win
function win(){
    alert('You Win!');
    score++;
    var scoreTxt = document.getElementById('score');
    scoreTxt.textContent = 'score: ' + score;
    reset();
}

// reset the game
function reset(){
    var cards = document.getElementsByClassName('scene');
    var board = document.getElementById('board');
    for (var ind = cards.length - 1; ind > 0; ind--){
        board.removeChild(cards[ind]);
    }
    var lastCard = document.getElementsByClassName('card_pair');
    console.log(lastCard);
    lastCard[0].className = 'card';
    setup();
}

// check if it is a pair
function checkPair() {
    var cardsPair = document.getElementsByClassName('is-flipped')
    if (cardsPair.length == 2){
        var cardsPairImg = [];
        cardsPairImg[0] = cardsPair[0].lastElementChild.lastElementChild;
        cardsPairImg[1] = cardsPair[1].lastElementChild.lastElementChild;
        if (cardsPairImg[0].src == cardsPairImg[1].src){
            console.log('yes');
            setTimeout(flipCards, 1000, cardsPair[0], cardsPair[1]);
            setTimeout(hideCards, 1800, cardsPair[0], cardsPair[1]);
            if (cardsOnBoard == 2) {
                setTimeout(win, 2800);
            }
        }
        else {
            console.log('no');
            setTimeout(flipCards, 1000, cardsPair[0], cardsPair[1]);
        }
    }
}

function vovaImages() {
    imgArray[0] = 'images/Vova/img1.jpg'
    imgArray[1] = 'images/Vova/img2.jpg';
    imgArray[2] = 'images/Vova/img3.jpg';
    imgArray[3] = 'images/Vova/img4.jpg';
    imgArray[4] = 'images/Vova/img5.jpg';
    imgArray[5] = 'images/Vova/img6.jpg';
    imgArray[6] = 'images/Vova/img7.jpg';
    imgArray[7] = 'images/Vova/img8.jpg';
    imgArray[8] = 'images/Vova/img9.jpg';
    imgArray[9] = 'images/Vova/img10.jpg';
    imgArray[10] = 'images/Vova/img11.jpg';
    imgArray[11] = 'images/Vova/img12.jpg';
    imgArray[12] = 'images/Vova/img13.jpg';
    imgArray[13] = 'images/Vova/img14.jpg';
    imgArray[14] = 'images/Vova/img15.jpg';
    imgArray[15] = 'images/Vova/img16.jpg';
    imgArray[16] = 'images/Vova/img17.png';
}

function ianImages() {
    imgArray[0] = 'images/Ian/img1.jpg';
    imgArray[1] = 'images/Ian/img2.jpg';
    imgArray[2] = 'images/Ian/img3.jpg';
    imgArray[3] = 'images/Ian/img4.jpg';
    imgArray[4] = 'images/Ian/img5.jpg';
    imgArray[5] = 'images/Ian/img6.jpg';
    imgArray[6] = 'images/Ian/img7.jpg';
    imgArray[7] = 'images/Ian/img8.jpg';
    imgArray[8] = 'images/Ian/img9.jpg';
    imgArray[9] = 'images/Ian/img10.jpg';
    imgArray[10] = 'images/Ian/img11.jpg';
    imgArray[11] = 'images/Ian/img12.jpg';
    imgArray[12] = 'images/Ian/img13.jpg';
    imgArray[13] = 'images/Ian/img14.jpg';
    imgArray[14] = 'images/Ian/img15.jpg';
    imgArray[15] = 'images/Ian/img16.jpg';
    imgArray[16] = 'images/Ian/img17.jpg';
    imgArray[17] = 'images/Ian/img18.jpg';
    imgArray[18] = 'images/Ian/img19.jpg';
    imgArray[19] = 'images/Ian/img20.jpg';
    imgArray[20] = 'images/Ian/img21.jpg';
    imgArray[21] = 'images/Ian/img22.jpg';
    imgArray[22] = 'images/Ian/img23.jpg';
    imgArray[23] = 'images/Ian/img24.jpg';
}

//theFormSubmit.addEventListener('click', submitAndStart);
var imgArray = [];

document.getElementById('board').style.display = 'none';

var bottuns = document.getElementsByTagName('button');
for (var ind = 0; ind < bottuns.length; ind++){
    bottuns[ind].addEventListener( 'click', setupBoard);
}

//setupBoard();