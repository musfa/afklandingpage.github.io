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

$(".sum_stores").spincrement({
    from: 0,
    to: 300,
    decimalPlaces: 0,
    decimalPoint: '.',
    thousandSeparator: ',',
    duration: 1000, // ms; TOTAL length animation
    leeway: 50, // percent of duraion
    easing: 'spincrementEasing',
    fade: true
});

$(".sum_customers").spincrement({
    from: 0,
    to: 1000,
    decimalPlaces: 0,
    decimalPoint: '.',
    thousandSeparator: ',',
    duration: 1000, // ms; TOTAL length animation
    leeway: 50, // percent of duraion
    easing: 'spincrementEasing',
    fade: true
});

$(".sum_products").spincrement({
    from: 0,
    to: 3000,
    decimalPlaces: 0,
    decimalPoint: '.',
    thousandSeparator: ',',
    duration: 1500, // ms; TOTAL length animation
    leeway: 50, // percent of duraion
    easing: 'spincrementEasing',
    fade: true
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