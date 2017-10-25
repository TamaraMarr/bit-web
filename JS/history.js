function backOrForw(direction) {
    if(direction === 'back') {
        return history.back(2);
    } else if (direction === 'forward') {
        return history.forward(2);
    } else {
        console.log('Unsupported argument value!');
        return;
    }
}