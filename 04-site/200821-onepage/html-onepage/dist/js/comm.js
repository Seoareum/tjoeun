$(document).ready(function(){

  //slide-main
  $('.slide-main').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,    // 화살표 양쪽 버튼 검사에서 아예 없애기
    dots: true,   //기본값은 이미지 아래 가운데.
  });

// slide-festival
$('.slide-festival').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

 // scrollUp
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: 'Scroll to top', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  
  });

  // scrollTo
  $('nav a').on('click', function(event) {
    $.scrollTo(this.hash || 0,500);
    event.preventDefault();
  })


});