import "./style.scss";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

$(document).ready(function(){

    $(".parte1 img").hide();

    $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      autoHeight:true,
      autoplay:true,
      autoplayTimeout: 5000,
      animateOut: 'fadeOut',
    });

    $(".active .parte1 img").show();
    
    var owl = $('.owl-carousel');

    setTimeout(function(){ 
          $("#carousel-1").fadeIn(1000); 
      }, 1000);


    owl.on('changed.owl.carousel', function(event) {
        setTimeout(function(){ 
          $(".parte1 img").hide();
          $(".active .parte1 img").fadeIn(1000); 
      }, 1000);
    });

});
