$(document).ready(function () {
    // Toggle nav
    $('.tggnav').click(function () {
        $('#tgg-nav').toggle();
    });

    $('.close').click(function () {
        $('#tgg-nav').toggle();
    });

    // Open ebooks
    $('.ebook').click(function () {
    	var url = $(this).attr('data-url');
    	window.open(url,'_blank');
    });
})