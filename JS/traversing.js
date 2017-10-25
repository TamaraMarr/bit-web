function traversing() {
    var someNode = document.querySelector(".active");
    someNode.className = '';

    var initialListParent = someNode.parentNode.parentNode;

    initialListParent.nextSibling.nextSibling.childNodes[1].childNodes[3].className = "active";
};