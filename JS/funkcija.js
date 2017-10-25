function ime() {
    console.log("Ja sam " + name + "!");
}

function info() {
    console.log(navigator.platform);
    console.log(window.navigator.userAgent);
    console.log(navigator.appVersion);
    console.log(navigator.vendor);
}

function isOnline() {
    if (navigator.onLine) {
        console.log("Online");
        return;
    }

    console.log("Offline");

}

function screening() {
    console.log('Width is: ' + screen.width + '\nHeight is: ' + screen.height);
    console.log('Available width is: ' + screen.availWidth + '\nAvalable height is: ' + screen.availHeight);
}

function urlInfo() {
    console.log('Full URL address: ' + location.href, "\nDomain name: " + location.hostname, "\nProtocol: " + location.protocol, + "\nParameters: " + location.search);

    console.log('Absolute: ', location.href);
    console.log('Domain name: ', location.hostname);
    console.log('Protocol: ', location.protocol);
    console.log("Parameters: " + location.search);
}

function relo() {
    location.reload();
}

function redirect() {
    location.replace("https://www.spotify.com/");
}

function local(key, value) {
    sessionStorage.setItem(key, value);
}
function reading(key) {
    if (!sessionStorage.length) {
        console.log('There is no data');
        return;
    }
    console.log(key + ': ' + sessionStorage.getItem(key));
}

