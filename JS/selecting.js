(function selecting(){
    document.getElementsByTagName("ul")[1].className = "tebrica";
}) ();

function selectAllLi() {
    var liElement = document.getElementsByTagName("li");
    for(var i = 0; i < liElement.length; i++) {
        liElement[i].className = "svakiLi";
    }
}

function selectLastList() {
    var selectedLast = document.getElementsByTagName("ul")[2].getElementsByTagName("li");

    for(var i = 0; i < selectedLast.length; i++) {
        selectedLast[i].className = "last-list";
    }
}