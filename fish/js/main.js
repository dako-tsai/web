

$(document).ready(function(){
  $('.game_silder').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
  });
});

$(function(){
    $('.show').click(function(){
        $('.pop').fadeIn();
    });
    $('.hide').click(function(){
        $('.pop').fadeOut();
    });
});



TweenMax.from(".logo", 2, {scale:5,ease:Elastic.easeOut});
TweenMax.from(".fish", 0.5, {scale:0.1});
TweenMax.from(".btn_1", 0.5, {opacity:0,scale:2});



TweenMax.from(".game_silder", 1.5, {opacity:0,scale:0.2,ease:Elastic.easeOut});
TweenMax.from(".pull-left,.pull-right,.btn_2", 1, {opacity:0,scale:2});

new TimelineMax().staggerFrom(".nav li", 1, {opacity:0,scale:2}, 0.1);

TweenMax.from(".info", 1, {opacity:0,scale:2,ease:Elastic.easeOut});