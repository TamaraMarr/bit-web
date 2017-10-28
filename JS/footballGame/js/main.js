var rightButton = document.querySelector('#right');
var leftButton = document.querySelector('#left');
var upButton = document.querySelector('#up');
var downButton = document.querySelector('#down');
var playerNenad = document.getElementById('nenad');
var playerMarko = document.getElementById('marko');
var gameOver = document.querySelector('#gameOver');


rightButton.addEventListener("click", moveRightNenad);
function moveRightNenad(event) {
    var x = event.clientX;
    var shift = playerNenad.offsetWidth / 2;
    playerNenad.style.left = x + shift + 'px';
}

leftButton.addEventListener("click", moveLeftNenad);
function moveLeftNenad(event) {
    var x = event.clientX;
    var shift = playerNenad.offsetWidth * 2;
    playerNenad.style.left = x - shift + 'px';
}

downButton.addEventListener("click", moveDownNenad);
function moveDownNenad(event) {
    var x = event.clientY;
    var shift = playerNenad.offsetHeight / 2;
    playerNenad.style.top = x - shift + 'px';
}

upButton.addEventListener("click", moveUpNenad);
function moveUpNenad(event) {
    var x = event.clientY;
    var shift = playerNenad.offsetHeight * 1.2;
    playerNenad.style.top = x - shift + 'px';
}

rightButton.addEventListener("click", moveRightMarko);
function moveRightMarko(event) {
    var x = event.clientX;
    var shift = playerMarko.offsetWidth / 2;
    playerMarko.style.left = x + shift + 'px';
}

leftButton.addEventListener("click", moveLeftMarko);
function moveLeftMarko(event) {
    var x = event.clientX;
    var shift = playerMarko.offsetWidth * 2;
    playerMarko.style.left = x - shift + 'px';
}

downButton.addEventListener("click", moveDownMarko);
function moveDownMarko(event) {
    var x = event.clientY;
    var shift = playerMarko.offsetHeight / 2;
    playerMarko.style.top = x - shift + 'px';
}

upButton.addEventListener("click", moveUpMarko);
function moveUpMarko(event) {
    var x = event.clientY;
    var shift = playerMarko.offsetHeight * 1.2;
    playerMarko.style.top = x - shift + 'px';
}

// gameOver.onclick = function() {
//     rightButton.removeEventListener("click", moveRight);
//     leftButton.removeEventListener("click", moveLeft);
//     upButton.removeEventListener("click", moveUp);
//     downButton.removeEventListener("click", moveDown);
// }