$(function () {

  $('.saddled__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    infinite: true,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    pauseOnHover: false,
    swipe: false,
    variableWidth: true, // Отключаем variableWidth
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 3, // Больше слайдов на мобильных устройствах
    //       speed: 5000 // Оптимизировать скорость
    //     }
    //   }
    // ]
  });

  //CAROUSEL END
  $('.visualize__slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    draggable: true,
    centerMode: true,
    variableWidth: true ,
    dots: true,
    appendDots: ('.visualise__slider-dots'),
    // autoplay: true,
    // responsive:
    //   [
    //     {
    //       breakpoint: 1100,
    //       settings: {
    //         slidesToShow: 4,
    //       },
    //     },
    //     {
    //       breakpoint: 920,
    //       settings: {
    //         slidesToScroll: 1,
    //         infinite: true,
    //         centerMode: false,
    //         variableWidth: true,
    //       },
    //     },
    //   ]
  })

  $('.visualize__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.visualize__slider').slick('slickPrev')
  })

  $('.visualize__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.visualize__slider').slick('slickNext')
  })
  //HEADER SLIDER END
  //SMOOTH SCROLL START
  $(".header__nav-link, .footer__logo-link, .burger__nav-link").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top - 0
    $('body,html').animate({ scrollTop: top }, 2200)
  });
  //SMOOTH SCROLL END

  $(".btn").on("click", function(e) {
    e.preventDefault();
    $(".overlay").addClass("overlay--visible");
});

// Убираем стандартное поведение только для .overlay__btn-link
$(".overlay__btn-link").on("click", function(e) {
    e.preventDefault();
    $(".overlay").removeClass("overlay--visible");
});

// Для всего остального проверяем, если клик был вне .overlay__form-wrapper
$(".overlay").on("click", function(e) {
    if (!$(e.target).closest(".overlay__form-wrapper").length) {
        $(".overlay").removeClass("overlay--visible");
    }
});

 
$(".header__burger-btn").on("click", function(e){
  e.preventDefault()
  $(".burger__menu").addClass("burger--visible")
})

$(".burger__menu-btn--x, .burger__nav-link").on("click", function(e){
  e.preventDefault()
  $(".burger__menu").removeClass("burger--visible")
})

})