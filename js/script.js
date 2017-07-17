
function initMap() {
  image = 'assets/gmap-pin.png';
  var coordinates = {lat: 46.484996, lng: 30.741088};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates,
    zoom: 15,
    scrollwheel: false
  });

    marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
  });

  $.getJSON("json/map.json", function (data) {
    map.setOptions({styles: data});
  })
}

var video = 'https://www.youtube.com/embed/FKWwdQu6_ok'

$(document).ready(function(){
  $("body").on("click","a", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() > 150) {
      $('.header__nav').addClass('scroll');
      $('.btn__toTop').addClass('visible');
    }
    else {
      $('.header__nav').removeClass('scroll');
      $('.btn__toTop').removeClass('visible');
    }
  });

  $(".promo button").click(function(){
    $('#video').attr('src', video)
    $(".video__main").addClass("visible");
    $(".mask").addClass("visible")
  });

  $(".mask , .video__main button").click(function(){
    $('#video').attr('src', '')
    $(".video__main").removeClass("visible");
    $(".mask").removeClass("visible")
  });

  $(".hamburger").click(function(){
    $(".header__nav_menu").slideToggle("slow");
  });

});






