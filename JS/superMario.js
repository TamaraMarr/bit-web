//var body = document.getElementsByTagName('body');
var prvaSlika = document.querySelector("#marioStill");
var drugaSlika = document.querySelector("#marioRun");
document.onclick = function() {
    prvaSlika.classList.toggle("hidden");
    drugaSlika.classList.toggle("hidden");
}