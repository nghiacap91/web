// $(".images").magnificPopup({
//     delegate: "img",
//     type: "image",
    // gallery: {
    //     enabled: true,
    //     preload: [0, 2],
    //     arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
    //     tPrev: 'Previous (Left arrow key)', // title for left button
    //     tNext: 'Next (Right arrow key)', // title for right button
    //     tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
    // }
// });

$('.images').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
});

$(".date").pickadate({
    format: 'Bạn đã chọn: dddd, dd mmmm, yyyy',
    formatSubmit: 'dd/mm/yyyy'
});

$('.scratch').wScratchPad({
    size: 70,          // The size of the brush/scratch.
    bg: '1500x.jpg',  // Background (image path or hex color).
    fg: '#ff80ce',  // Foreground (image path or hex color).
});

let scroll = document.querySelector(".curve");
window.addEventListener("scroll", function () {
    let value = 1 + window.scrollY / -500;
    scroll.style.transform = `scaleY(${value})`;
})

let clock = $(".clock").FlipClock({
    clockFace: "TwelveHourClock"
});