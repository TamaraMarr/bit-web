function createNode(element, options) {
    
    var someList = document.createElement('select');

    for (var i = 0; i < options.length; i++) {
        var option = document.createElement('option');
        var content = document.createTextNode(options[i]);
        option.appendChild(content);
        someList.appendChild(option);
    }

    element.appendChild(someList);
}

var arr1 = [1, 2, 3, 4, 5];
var arr2 = ['hi', 'hello', 'byeee'];
var selectedElement1 = document.querySelector("#first");
var selectedElement2 = document.querySelector("#second");
createNode(selectedElement1, arr1);
createNode(selectedElement2, arr2);