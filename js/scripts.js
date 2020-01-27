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
  var sliderPrevArrow = '<button type="button" class="slick-prev"><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.82 21.18L5.66 12L14.82 2.82L12 0L0 12L12 24L14.82 21.18Z" fill="currentColor"/> </svg></button>';
  var sliderNextArrow = '<button type="button" class="slick-next"><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.180002 2.82L9.34 12L0.180001 21.18L3 24L15 12L3 -1.04907e-06L0.180002 2.82Z" fill="currentColor"/> </svg></button>';

  $('.text-blocks-slider .slider').slick({
    prevArrow: sliderPrevArrow,
    nextArrow: sliderNextArrow,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendArrows: $('.text-blocks-slider .slider-btns'),
    infinite: true,
    centerMode: true,
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
    // adaptiveHeight: true,
    // centerMode: true,
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
    appendDots: $('footer .left'),
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
