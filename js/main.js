
   $(document).ready(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,              // Enable autoplay
    autoplaySpeed: 1000,         // Time in ms (3 seconds)
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,              // Optional: also autoplay nav
    autoplaySpeed: 1000,
  

      responsive: [

          {
              breakpoint: 768, 
              settings: {
                 dots: false,         // ✅ show dots
                  arrows: true,
                  slidesToShow: 1,
                  centerMode: true,
     
                    
              }
          },
          {
              breakpoint: 480, 
              settings: {
                 dots: false,         // ✅ show dots
                  arrows: true ,
                  slidesToShow: 1,
                  centerMode: true,
     
              }
          }
      ]
  });
});
    jQuery(".home-banner").slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,

  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]


});