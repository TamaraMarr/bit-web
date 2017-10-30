$(function (){
    $("li:first").addClass("donjiBorder");
});
$(function (){
    $("li").addClass("upperCase");
});

var lista = $("a");
var middleOneIndex = Math.round(lista.length/2) -1;


$(function(){
    $(lista[middleOneIndex]).css('background-color', 'red');
});
