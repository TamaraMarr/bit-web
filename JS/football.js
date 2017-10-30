function movePlayer(event) {
    var player = document.querySelector('#player');
    var offset = player.width / 2;
    var x = event.clientX;
    var y = event.clientY;

    player.style.top = (y - offset) + 'px';
    player.style.left = (x - offset) + 'px';
}

function stopMoving() {
    console.log('nesto');
    body.removeEventListener('click', movePlayer);
}

var body = document.querySelector('body');
var stopMovingButton = document.querySelector('#stop-moving');

body.addEventListener("click", movePlayer);
stopMovingButton.addEventListener('click', stopMoving);