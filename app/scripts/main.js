/****************************************************/
/*** Scroll da página
/****************************************************/
$('a.scroll').on('click', function(event) {
    event.preventDefault();

    var sectionId = $(this).attr('href');
    var sectionPosition	= $(sectionId).offset().top;

    sectionPosition = sectionPosition - 60;

    $('html, body').animate({'scrollTop' : sectionPosition+'px'}, 1000 );
});
/********************** fim *************************/
