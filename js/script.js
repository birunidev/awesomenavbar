$(document).ready(function () {

    $(window).scroll(function () {

        $wScroll = $(window).scrollTop();
        $navHeight = $('.navbar').height();

        if ($wScroll > $navHeight) {
            $('.navbar').addClass('scrolled');
            if ($wScroll > $navHeight + 60) {
                $('.navbar').addClass('next-scrolled');
            }

        } else {
            $('.navbar').removeClass('scrolled');
        }






    });







});