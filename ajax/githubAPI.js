$('#goBtn').on('click', function () {
    ghUsers();
});


function ghUsers() {
    var userName = $('#userName').val();

    var request = $.ajax({
        url: 'https://api.github.com/search/users?q=' + userName
    })

    request.done(function (users) {
        var users = users.items;

        for (var index = 0; index < users.length; index++) {
            var userImg = $('<img>');
            userImg.attr('src', users[index].avatar_url);
            userImg.appendTo('#results');

            var userLogin = $('<a>' + users[index].login + '</a>');
            var userURLPath = users[index].html_url;
            userLogin.attr('href:', userURLPath);
            userLogin.css('display', 'block');
            userLogin.appendTo('#results');
        }
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}