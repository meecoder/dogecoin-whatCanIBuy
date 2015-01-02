$(document).ready(function () {
    $('a').fadeOut();
    $('p').fadeOut();
    $('input').keydown(function () {
        for (var i = 0; i <= $('a').length * 2; i++) {
            if($('a:nth-child(' + i + ')').data('price') <= $('input').val()) {
                $('a:nth-child(' + i + ')').fadeIn();
                $('a:nth-child(' + i + ')').next().fadeIn();
            } else {
                $('a:nth-child(' + i + ')').fadeOut();
                $('a:nth-child(' + i + ')').next().fadeOut();
            }
        }
    });
});