$('#findButton').on('click', function () {
    userIP();
});


function userIP() {
    var IP = $('#inputRequest').val();

    var request = $.ajax({
        url: 'http://freegeoip.net/json/' + IP
    })

    request.done(function (msg) {
        country = msg.country_name;
        $('#log').html(country);
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}