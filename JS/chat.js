function chat() {
    var chatArea = document.querySelector('div');
    var input = document.querySelector('input').value;
    
    var newDiv = document.createElement('p');
    newDiv.textContent = input;
    document.querySelectorAll('p');
   
    chatArea.appendChild(newDiv);
    newDiv.classList.add('chatbubble');   
}