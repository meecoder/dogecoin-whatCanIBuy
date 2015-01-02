$(document).ready(function () {
    $('a').fadeOut();
    $('p').fadeOut();
    $('input').keyup(function () {
        for (var i = 0; i <= $('a').length * 2; i++) {
            if($('a:nth-child(' + i + ')').data('price') <= $('input').val()) {
                $('a:nth-child(' + i + ')').fadeIn();
                $('a:nth-child(' + i + ')').next().fadeIn();
            } else {
                $('a:nth-child(' + i + ')').fadeOut();
                $('a:nth-child(' + i + ')').next().fadeOut();
            }
        }
        $("#suchlist").attr("href", "https://www.suchlist.com/index.php?page=search&sPriceMax=" + $('input').val() + "&sOrder=i_price&iOrderType=desc")
        $("#suchlist-price").html("under " + $('input').val() + " doge")
    });
});