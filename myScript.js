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
var newImgArray = [];

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
    if (nameOfPlayer == 'Animal') {
        animalImages();
    }
    else {
       // ianImages();
       animalImages();
    }
    setup();
}

function setup() {
    var buttonsBox = document.getElementById('buttonsBox');
    var board = document.getElementById('board');

    cardsOnBoard = numberOfCards;
    createCards();
    listenAndFlip();
    shuffleArray(imgArray);
    copyAndDouble();
    shuffleArray(newImgArray);
    putSrc();
    switchBoards(buttonsBox, board); 
    setTimeout(function(){
        board.style.display = 'flex';
        board.style.transitionProperty = 'opacity';
        board.style.transitionDelay = '2100ms';
        board.style.transitionDuration = '1000ms';
        board.style.opacity = '1';
    }, 1100);
}

function switchBoards(el1, el2) {
    el1.style.transitionProperty = 'opacity';
    el1.style.transitionDelay = '100ms';
    el1.style.transitionDuration = '1000ms';
    el1.style.opacity = '0';
    
  setTimeout(function(){
        el1.style.display = 'none';
    }, 1000);
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

function animalImages() {
    imgArray[0] = 'images/animal/png/001-cat.png'
    imgArray[1] = 'images/animal/png/002-horse.png';
    imgArray[2] = 'images/animal/png/003-gorilla.png';
    imgArray[3] = 'images/animal/png/004-snake.png';
    imgArray[4] = 'images/animal/png/005-toucan.png';
    imgArray[5] = 'images/animal/png/006-jaguar.png';
    imgArray[6] = 'images/animal/png/007-frog.png';
    imgArray[7] = 'images/animal/png/008-lion.png';
    imgArray[8] = 'images/animal/png/009-antilope.png';
    imgArray[9] = 'images/animal/png/010-elephant.png';
    imgArray[10] = 'images/animal/png/011-giraffe.png';
    imgArray[11] = 'images/animal/png/012-dog.png';
    imgArray[12] = 'images/animal/png/013-zebra.png';
    imgArray[13] = 'images/animal/png/014-koala.png';
    imgArray[14] = 'images/animal/png/015-coyote.png';
    imgArray[15] = 'images/animal/png/016-ostrich.png';
    imgArray[16] = 'images/animal/png/017-duck.png';
    imgArray[17] = 'images/animal/png/018-tasmanian devil.png';
    imgArray[18] = 'images/animal/png/019-shark.png';
    imgArray[19] = 'images/animal/png/020-fish.png';
    imgArray[20] = 'images/animal/png/021-octopus.png';
    imgArray[21] = 'images/animal/png/022-sea star.png';
    imgArray[22] = 'images/animal/png/023-goldfish.png';
    imgArray[23] = 'images/animal/png/024-medusa.png';
    imgArray[24] = 'images/animal/png/025-crocodile.png';
    imgArray[25] = 'images/animal/png/026-turtle.png';
    imgArray[26] = 'images/animal/png/027-snake.png';
    imgArray[27] = 'images/animal/png/028-lizard.png';
    imgArray[28] = 'images/animal/png/028-lizard.png';
    imgArray[29] = 'images/animal/png/030-bug.png';
    imgArray[30] = 'images/animal/png/031-bee.png';
    imgArray[31] = 'images/animal/png/032-butterfly.png';
    imgArray[32] = 'images/animal/png/033-ant.png';
    imgArray[33] = 'images/animal/png/034-parrot.png';
    imgArray[34] = 'images/animal/png/035-caterpillar.png';
    imgArray[35] = 'images/animal/png/036-spider.png';
    imgArray[36] = 'images/animal/png/037-stingray.png';
    imgArray[37] = 'images/animal/png/038-scorpion.png';
    imgArray[38] = 'images/animal/png/039-lobster.png';
    imgArray[39] = 'images/animal/png/040-crab.png';
    imgArray[40] = 'images/animal/png/041-reindeer.png';
    imgArray[41] = 'images/animal/png/042-bear.png';
    imgArray[42] = 'images/animal/png/043-wolf.png';
    imgArray[43] = 'images/animal/png/044-owl.png';
    imgArray[44] = 'images/animal/png/045-rabbit.png';
    imgArray[45] = 'images/animal/png/046-bunny.png';
    imgArray[46] = 'images/animal/png/047-cow.png';
    imgArray[47] = 'images/animal/png/048-pig.png';
    imgArray[48] = 'images/animal/png/049-rooster.png';
    imgArray[49] = 'images/animal/png/050-sheep.png';
}


//theFormSubmit.addEventListener('click', submitAndStart);
var imgArray = [];

var board = document.getElementById('board');
board.style.opacity = '0';
board.style.display = 'none';

var buttons = document.getElementsByTagName('button');
for (var ind = 0; ind < buttons.length; ind++){
    buttons[ind].addEventListener( 'click', setupBoard);
}