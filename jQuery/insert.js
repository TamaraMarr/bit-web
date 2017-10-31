(function () {
    var images = [
        './img/kitten1.jpg',
        './img/kitten2.jpg',
        './img/kitten3.jpg',
        './img/puppy1.jpg',
        './img/puppy2.jpg',
        './img/puppy3.jpg',
    ]

    $('body').prepend('<div></div>');
    var gallery = $('div').addClass('gallery');

    for (var i = 0; i < images.length; i++) {
        $(gallery).append('<img src="' + images[i] + '">');
    }

    $(gallery).before('<h1>Our Awesome Gallery</h1>');

    var galImg = $('.gallery img');

    $.each(galImg, function (index, value) {
        $(galImg[index]).attr('width', Math.round(200 * Math.random() + 100) + 'px');
    });
})();