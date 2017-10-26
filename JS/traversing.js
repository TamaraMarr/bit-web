function traversing() {
    var someNode = document.querySelector(".active");
    someNode.className = '';

    var initialListParent = someNode.parentNode.parentNode;

    initialListParent.nextSibling.nextSibling.children[3].className = "active";
};