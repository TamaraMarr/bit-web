function validateForm() {
    var inputs = document.querySelectorAll('input');

    for (var i = 0; i < inputs.length; i++) {
        var currentEle = inputs[i];

        if (currentEle.hasAttribute("required") && currentEle.value === '') {
            currentEle.classList.add("redborder");
        }

        if (currentEle.hasAttribute("required") && currentEle.value !== '') {
            currentEle.classList.remove("redborder");
        }
    }

    
}