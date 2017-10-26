function giveBorder(){
    var noClass = document.querySelector('.selected');
    noClass.className = '';
    noClass.parentElement.nextElementSibling.children[1].className = 'selected';
    
}