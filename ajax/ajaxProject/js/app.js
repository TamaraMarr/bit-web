let articleContainer = $('.row');

var request = $.ajax({
    url: 'http://api.tvmaze.com/shows'
});

// home page
request.done(function (allShowInfo) {
    for (var i = 0; i < 50; i++) {

        let showName = allShowInfo[i].name;
        let showIMG = allShowInfo[i].image.original;

        let articleDiv = $('<div class="showDiv">');
        articleDiv.addClass('col-sm-12 col-md-6 col-lg-4 col-xl-4');

        let showImage = $('<img class="mainPage-showImg">');
        showImage.attr('src', showIMG);
        showImage.css('display', 'inline-block')

        let showLink = $('<a class="showLink">' + showName + '</a>');
        showLink.attr('data-show-id', (i + 1));
        showLink.attr('href', '#');

        articleDiv.append(showImage);
        articleDiv.append(showLink);

        articleContainer.append(articleDiv);
    }
});

//switching to the single page
$(document).on('click', '.showLink', function (event) {
    var usedLink = $(this).attr('data-show-id');
    localStorage.setItem('data-show-id', usedLink);

    window.location.href = 'single.html';
});

function searchShows() {
    let enteredText = $('.searchLine').val();

    var request = $.ajax({
        url: 'http://api.tvmaze.com/search/shows?q=' + enteredText
    })

    request.done(function (gotResult) {
        console.log(gotResult);
        $('.row').text('');

        for (var i = 0; i < gotResult.length; i++) {

            let showName = gotResult[i].show.name;
            let showIMG;
            let searchedURL = gotResult[i].show.id;

            if (gotResult[i].show.image === null) {
                showIMG = 'http://via.placeholder.com/350x500?text=No+Image+Available';
            } else {
                showIMG = gotResult[i].show.image.original;
            }

            $('.row').append(`<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div style="margin-bottom: 5px">
                                    <img src='${showIMG}', style="display:inline-block">
                                    <a class="showLink" data-show-id="${searchedURL}", href="#">${showName}</a>
                                </div>
                            </div>`);
        }
    })
}

//search line
$(document).on('keydown', '.searchLine', function (event) {
    if (event.keyCode === 13) {
        searchShows();
    }
})

//search dropdown list
$('.searchLine').keyup(function() {
    const enteredText = $('.searchLine').val();

    var request = $.ajax({
        url: 'http://api.tvmaze.com/search/shows?q=' + enteredText
    });

    request.done(function (gotResult) {
        // console.log(gotResult);
        for(let i = 0; i < gotResult.length; i++) {
            let searchListItem = $('<li>');
            searchListItem.append(gotResult[i].show.name);
            searchListItem.attr('data-show-id', gotResult[i].show.id);
            $('#searchList').append(searchListItem);
        }

        $('li').on('click', function() {
            var usedLink = $(this).attr('data-show-id');
            localStorage.setItem('data-show-id', usedLink);
        
            window.location.href = 'single.html';
        })
    });

    $('#searchList').text('');
})