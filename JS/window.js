function greet(){
    alert("Hi user! ");
    var answer = prompt("On the scale from one to ten how cool are u?");
    // || "Please reload the program"
    if(!answer) {
        return;
    }

    var maybeConfirmed = confirm("We will submit this answer now!\n" + answer);
    
    if(maybeConfirmed) {
        alert("Success!");
    }
}