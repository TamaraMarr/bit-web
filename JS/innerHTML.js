function createNode(element, options) {
    var content = "<select name='shoppingList'>\n";

    for (var i = 0; i < options.length; i++) {
        content += ("<option value='" + options[i] + "'>" + options[i] + "</option>\n");
    }

    element.innerHTML += content + "</select>\n";
}

var selectedElement = document.querySelector("body");
createNode(selectedElement, [1, 3, 4, 5, 65]);