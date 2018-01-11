let showID = localStorage.getItem("data-show-id");

const request = $.ajax({
    url: 'http://api.tvmaze.com/shows/' + showID,
    data: {
        embed: ['seasons', 'cast']
    }
});

request.done(function (singleShow) {
    // h1
    let showTitle = singleShow.name;
    let header = $(`<h1 class="singleShowTitle"> ${showTitle} </h1>`);
    $('.container').append(header);

    // pic
    if (singleShow.image === null) {
        showPic = 'http://via.placeholder.com/350x500?text=No+Image+Available';
    } else {
        showPic = singleShow.image.original;
    }
    
    // number of seasons
    let numOfSeasons = singleShow._embedded.seasons.length;

    // summary
    let summary = singleShow.summary;

    //list of seasons beginning and end dates

    let seasonsDates = '';
    let showCast = '';

    for (let i = 0; i < singleShow._embedded.seasons.length; i++) {
        if (singleShow._embedded.seasons[i].premiereDate === null || singleShow._embedded.seasons[i].endDate === null) {
            seasonsDates += "<li>Unknown</li>"
        } else {
            seasonsDates += `<li>${singleShow._embedded.seasons[i].premiereDate}
                            -${singleShow._embedded.seasons[i].endDate}</li>`;
        }
    }

    for (let i = 0; i < singleShow._embedded.cast.length; i++) {
        if (i === 10) {
            break;
        }
        showCast += `<li>${singleShow._embedded.cast[i].person.name}</li>`
    }

    // adding showPic, number of seasons and summary to bootstrap div
    let bootstrapDiv = `<div class='row'>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 singleShowImgDiv"><img src='`
                                + showPic +
                                `' class="singleShowImg" ></div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6"><h2 class="titleStyle">Seasons (`
                                    + numOfSeasons +
                                `)</h2>
                                <ol>`
                                    + seasonsDates +
                                `</ol>
                            <h2 class="titleStyle">Cast</h2>
                                <ul>`
                                    + showCast +
                                `</ul>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 showDescription">` + summary + `</div>
                        </div>`;

    $('.container').append(bootstrapDiv);
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
        // console.log(gotResult);
        $('.row').text('');
        let rowDiv = $('<div>');
        rowDiv.addClass('row');

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
                                    <img src='${showIMG}'>
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
        console.log(gotResult);
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