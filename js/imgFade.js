$(document).ready(function () {

    var slideNum = $('.pBox1 .slideImg li').index();
    var num = 0;

    $('.slideImg li').hide();
    $('.slideImg li:eq(0)').show();

    $('.fBtn .fBack').click(function () {
        if (num == 0) {
            num = 0;
            return;
        } else num--;

        $('.slideImg li').hide();
        $('.slideImg li:eq(' + num + ')').fadeIn(1000);
    });
    $('.fBtn .fNext').click(function () {
        if (num == 4) {
            num = 4;
            return;
        } else num++;

        $('.slideImg li').hide();
        $('.slideImg li:eq(' + num + ')').fadeIn(1000);
    });
});
