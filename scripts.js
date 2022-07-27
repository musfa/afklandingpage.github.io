$(document).on("click", ".header-right a", function (e) {
    e.preventDefault();

    let id = $(this).attr("href");
    var topSpace = 30;

    $(".header-right a").removeClass("active");
    $(this).addClass("active");

    $('html, body').animate({
        scrollTop: $(id).offset().top - topSpace
    }, 800);
});

// $(window).scroll(function () {
//     var windScroll = $(window).scrollTop();
//     if(windScroll >= 100) {
//         $('section').each(function (i) {
//             if($(this).position().top <= windScroll - 0) {
//                 $(".header-right a.active").removeClass("active");
//                 $(".header-right a").eq(i).addClass("active");
//             }
//         })
//     } else {
//         $(".header-right a.active").removeClass("active");
//         $(".header-right a:first").addClass("active");
//     }
// }).scroll();