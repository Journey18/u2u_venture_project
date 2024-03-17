$(document).ready(function () {
  $(".news_carousel").slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1500,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
