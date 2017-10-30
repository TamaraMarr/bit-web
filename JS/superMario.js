var marioStill = document.querySelector("#marioStill");
var marioRun = document.querySelector("#marioRun");

// document.onclick = function() {
    
// }

var toggle = false;

function movingBG() {
    if(!toggle) {
        var x = 0;
        function moveBG() {
            x -= 10;
            $('body').css('background-position', x);
        }
        var handle = setInterval(moveBG, 35);

        marioStill.classList.toggle("hidden");
        marioRun.classList.toggle("hidden");
    } else {
        clearInterval(handle);
    }
    toggle = !toggle;
}

var body = document.querySelector('body');
body.addEventListener("click", movingBG);

