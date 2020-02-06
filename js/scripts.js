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

  // text-slider-titled-items
  $('.text-slider-titled-items .slider').slick({
    prevArrow: sliderPrevArrow,
    nextArrow: sliderNextArrow,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $('.text-slider-titled-items .slider-btns'),
    infinite: true,
    draggable: true,
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

  // input
  $('input').focus(function(){
    $(this).parents('.form-group').addClass('focused');
  });

  $('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');  
    } else {
        $(this).addClass('filled');
    }
  });

  // Custom select
  var x, i, j, selElmnt, a, b, c;
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected default");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");

        this.classList.remove("default");
    });
  }
  function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  document.addEventListener("click", closeAllSelect);
  // end custom select

  // inputRequireValidation
  function inputRequireValidation(inputWrapSelector) {
    if ($(inputWrapSelector).find('input').val().length > 0) {
      $(inputWrapSelector).addClass('valid');
      if ($(inputWrapSelector).hasClass('is-required')) {
        $(inputWrapSelector).removeClass('is-required');
        $(inputWrapSelector).addClass('valid');
        if ($(inputWrapSelector + ' .required-msg')) {
          $(inputWrapSelector + ' .required-msg').remove();
        }
      }
    } else {
      $(inputWrapSelector).addClass('is-required');
      if (document.querySelector(inputWrapSelector + ' .required-msg')) {
        return;
      } else {
        $(inputWrapSelector).append('<div class="required-msg">This field is required</div>');
      }
      if ($(inputWrapSelector).hasClass('valid')) {
        $(inputWrapSelector).removeClass('valid');
      }
    }
  }

  // emailValidation
  var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,10})$/;
  function emailValidation(emailWrapperSelector) {
    // is required validation
    if ($(emailWrapperSelector + ' input').val().length > 0) {
      $(emailWrapperSelector).addClass('valid');
      if ($(emailWrapperSelector).hasClass('is-required')) {
        $(emailWrapperSelector).removeClass('is-required');
        $(emailWrapperSelector).addClass('valid');
        if ($(emailWrapperSelector + ' .required-msg')) {
          $(emailWrapperSelector + ' .required-msg').remove();
        }
      }
      // email regexp validation
      if (regEmail.test($(emailWrapperSelector + ' input').val()) === false) {
        if ($(emailWrapperSelector).hasClass('valid')) {
          $(emailWrapperSelector).removeClass('valid');
        }
        if ($(emailWrapperSelector + ' .required-msg')) {
          $(emailWrapperSelector + ' .required-msg').remove();
        }
        $(emailWrapperSelector + ' .required-msg').remove();

        if (document.querySelector(emailWrapperSelector + ' .email-err-msg')) {
          return;
        } else {
          $(emailWrapperSelector).append('<div class="email-err-msg">Enter valid email</div>');
          $(emailWrapperSelector).addClass('is-required');
        }
      } else {
        if ($(emailWrapperSelector + ' .email-err-msg')) {
          $(emailWrapperSelector + ' .email-err-msg').remove();
        }
      }
      // email regexp validation
    } else {
      $(emailWrapperSelector).addClass('is-required');
      if ($(emailWrapperSelector + ' .email-err-msg')) {
        $(emailWrapperSelector + ' .email-err-msg').remove();
      }
      if (document.querySelector(emailWrapperSelector + ' .required-msg')) {
        return;
      } else {
        $(emailWrapperSelector).append('<div class="required-msg">This field is required</div>');
      }
      if ($(emailWrapperSelector).hasClass('valid')) {
        $(emailWrapperSelector).removeClass('valid');
      }
    }
  }

  // init validation
  function contactHandler(e) {
    e.preventDefault();

    inputRequireValidation('.map-and-form-section .inputs-wrap .form-group.name');
    emailValidation('.map-and-form-section .inputs-wrap .form-group.email');
  };

  $('.map-and-form-section .btn').click(contactHandler);
  $('.map-and-form-section .inputs-wrap .form-group.name').keyup(function() {
    inputRequireValidation('.map-and-form-section .inputs-wrap .form-group.name');
  });
  $('.map-and-form-section .inputs-wrap .form-group.email').keyup(function() {
    emailValidation('.map-and-form-section .inputs-wrap .form-group.email');
  });

  // end document ready
});
