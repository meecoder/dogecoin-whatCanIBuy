function search()
{
    for (var i = 0; i <= $('a').length * 2; i++) {
        if($('a:nth-child(' + i + ')').data('price') <= $('#price').val()
           && ($('a:nth-child(' + i + ')').data('category') == $('#category').val() || $('#category').val() == "anything")
           ) {
            $('a:nth-child(' + i + ')').fadeIn();
            $('a:nth-child(' + i + ')').next().fadeIn();
        } else {
            $('a:nth-child(' + i + ')').fadeOut();
            $('a:nth-child(' + i + ')').next().fadeOut();
        }
    }
    $("#suchlist").attr("href", "https://www.suchlist.com/index.php?page=search&sPriceMax=" + $('#price').val() + "&sOrder=i_price&iOrderType=desc")
    $("#suchlist-price").html("under " + $('#price').val() + " doge")
}

$(document).ready(function () {
    $('a').fadeOut();
    $('p').fadeOut();

    $('#price').keyup(function () {
        search();
    });
});
