'use strict';

$(document).ready(function() {

  // Video
  var video = document.querySelector('.top-video-section video');
  var videoWrap = document.querySelector('.top-video-section .video-wrap-inner');
  function togglePlayPouse() {
    if (video.paused) {
        video.play();
        $(videoWrap).removeClass('pause');
    } else {
        video.pause();
        $(videoWrap).addClass('pause');
    }
  }
  $(videoWrap).click(function() {
    togglePlayPouse();
  });

  // Slider
  var sliderPrevArrow = '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="26.493" height="12.723" viewBox="0 0 26.493 12.723"><defs><style>.a{fill:none;stroke:#030707;stroke-width:2px;}</style></defs><path class="a" d="M-965.567,1592h-24l11.507,11" transform="translate(992.06 -1591)"/></svg></button>';
  var sliderNextArrow = '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="26.493" height="12.723" viewBox="0 0 26.493 12.723"><defs><style>.a{fill:none;stroke:#030707;stroke-width:2px;}</style></defs><path class="a" d="M-989.567,1592h24l-11.507,11" transform="translate(989.567 -1591)"/></svg></button>';

  $('.text-blocks-slider .slider').slick({
    prevArrow: sliderPrevArrow,
    nextArrow: sliderNextArrow,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendArrows: $('.text-blocks-slider .slider-btns'),
    infinite: true,
    centerMode: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 530,
        settings: {
          arrows: false,
          dots: true
        }
      },
  ]
  });

  // Set text slider number func
  function setTextSliderNum() {
    var currentNum = +$('.text-blocks-slider .slider').slick('slickCurrentSlide') + 1;
    var count = $('.text-blocks-slider .slider').slick('getSlick').slideCount;

    if (+currentNum < 10) {
      currentNum = "0" + currentNum;
    }
    if (+count < 10) {
      count = "0" + count;
    }

    $('.text-blocks-slider .slider-btns .num .current').text(currentNum);
    $('.text-blocks-slider .slider-btns .num .all').text(count);
  };
  
  // init set text slider number func
  if (document.querySelector('.text-blocks-slider .slider')) {
    setTextSliderNum();
  
    $('.text-blocks-slider .slider-btns .slick-arrow').click(function () {
      setTextSliderNum();
    })
  }

  // Slider with accordion
  $('.descr-img-slider .slider').slick({
    prevArrow: sliderPrevArrow,
    nextArrow: sliderNextArrow,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $('.descr-img-slider .slider-btns'),
    infinite: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 530,
        settings: {
          arrows: false,
          dots: true
        }
      },
  ]
  });

  // Footer slider
  $('footer .slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    appendDots: $('footer .dots-wrap'),
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 530,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
  });

  // big-img-slider-section
  $('.big-img-slider-section .slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    appendDots: $('.big-img-slider-section .pagination'),
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a>0'+ (i+1) +'</a>';
              },
    responsive: [
      {
        breakpoint: 530,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
  });

  // big-img-slider-section-min
  $('.big-img-slider-section-min .slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    appendDots: $('.big-img-slider-section-min .pagination'),
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a>0'+ (i+1) +'</a>';
              },
    responsive: [
      {
        breakpoint: 530,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
  });


  // end document ready
});
