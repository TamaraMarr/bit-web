$('#goBtn').on('click', function () {
    ghUsers();
});


function ghUsers() {
    var userName = $('#userName').val();

    var request = $.ajax({
        url: 'https://api.github.com/search/users?q=' + userName
    })

    request.done(function (users) {
        var userImgPath = users.items[0].avatar_url;
        var userURLPath = users.items[0].html_url;
        var userImg = $('<img>');
        $(userImg).attr('src', userImgPath);
        userImg.html(userImgPath);

        var userURL = $('<a>');
        userURL.text(userURLPath);
        $(userURL).attr('href', userURLPath);
        $('#results').html(userImg);
        // $('#results').html(userURL);
        
        console.log(userImg, userURL)
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}