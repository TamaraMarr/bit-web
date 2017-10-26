function showMe() {
    var text = document.querySelector('nav li').textContent;
    alert(text);
}

function changeListItem(someText, someClass, elementTag){
    document.querySelector(elementTag).lastElementChild.className = someClass;
    document.querySelector(elementTag).lastElementChild.textContent = someText;
}