function backgroundToggler() {
    var bodySelector = document.querySelector('body');

    bodySelector.classList.toggle('lime');
    bodySelector.classList.toggle('hotpink');   
}

var interval;

function backgroundPartyToggler() {
    if(!interval) {
        interval = setInterval(backgroundToggler, 500);
    } else {
        clearInterval(interval);
        interval = null;
    }
}