$(function () {
  ('use strict');

  //===== Prealoder

  $(window).on('load', function (event) {
    $('.preloader').delay(500).fadeOut(500);
  });

  //===== Sticky

  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $('.navbar-area').removeClass('sticky');
    } else {
      $('.navbar-area').addClass('sticky');
    }
  });

  //===== close navbar-collapse when a  clicked

  $('.navbar-nav a').on('click', function () {
    $('.navbar-collapse').removeClass('show');
  });

  //===== Mobile Menu

  $('.navbar-toggler').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.navbar-nav a').on('click', function () {
    $('.navbar-toggler').removeClass('active');
  });

  //===== Section Menu Active

  var scrollLink = $('.page-scroll');
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset() - 73;
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

  var pos1 = window.pageYOffset;
  window.onscroll = function () {
    var pos2 = window.pageYOffset;
    if (pos1 > pos2) {
      document.getElementById('navbarEight').style.top = null;
      $('.navbar-area').removeClass('sticky');
    } else {
      document.getElementById('navbarEight').style.top = '-1000px';
    }
    pos1 = pos2;
  };

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('#navbarButton').fadeOut();
    } else {
      $('#navbarButton').fadeIn();
    }
  });

  var action = 1;

  let p = document.getElementById('btnMenu');
  p.onclick = viewSomething;

  function viewSomething() {
    if (action == 1) {
      document.getElementById('sobreurxit').style.display = 'none';
      document.getElementById('trabajo').style.display = 'none';
      document.getElementById('servicios').style.display = 'none';
      document.getElementById('novedades').style.display = 'none';
      document.getElementById('gente').style.display = 'none';
      document.getElementById('contacto').style.display = 'none';
      action = 2;
    } else {
      document.getElementById('sobreurxit').style.display = 'block';
      document.getElementById('trabajo').style.display = 'block';
      document.getElementById('servicios').style.display = 'block';
      document.getElementById('novedades').style.display = 'block';
      document.getElementById('gente').style.display = 'block';
      document.getElementById('contacto').style.display = 'block';
      action = 1;
    }
  }

  //===== Isotope Project 3

  $('.container').imagesLoaded(function () {
    var $grid = $('.grid').isotope({
      // options
      transitionDuration: '0.1s',
    });

    // filter items on button click
    $('.portfolio-menu ul').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue,
      });
    });

    //for menu active class
    $('.portfolio-menu ul li').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  });

  //  Magnific Popup

  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  //====== Magnific Popup

  $('.video-popup').magnificPopup({
    type: 'iframe',
    // other options
  });

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn(200);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //=====  AOS

  new WOW().init();

  //=====
});
