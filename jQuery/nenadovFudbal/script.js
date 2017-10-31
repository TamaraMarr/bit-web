var player = $('#player');
var body = $('body');

function movePlayer(event) {
    var playerElementDisplacement = player.width() / 2;
    player.css({
        'top': (event.pageY - playerElementDisplacement) + "px",
        'left': (event.pageX - playerElementDisplacement) + "px"
    });
}

function stopMoving() {
    body.off('click', movePlayer);
}

var stopMovingButton = $('#stop-moving');

body.on('click', movePlayer);
stopMovingButton.on('click', stopMoving);