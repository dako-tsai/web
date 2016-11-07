$(function(){
    $('#nav_btn').click(function(){
        $('#nav_btn').toggleClass('active');
        $('#black_bg').fadeToggle();
        $('#menu').slideToggle();
    });
    $('#black_bg').click(function(){
        $('#nav_Btn').removeClass('active');
        $('#menu').slideToggle();
        $('#black_bg').fadeToggle();      
    });
});

$('.my_btn').on('click', function() {
  $('.my_btn').removeClass('on_my_btn');
  $(this).toggleClass('on_my_btn');
});


$(function(){
    $('.hide_show_btn').click(function(){
        $('.icon-subtract,.icon-add').toggleClass('hide_block');
    });
});


$(function(){
    $('.show_withdraw_list_btn').click(function(){
        $('.show_withdraw_list').fadeIn();
        $('.show_withdraw_list_btn').fadeOut(0);
    });
    $('.hide_withdraw_list_btn').click(function(){
        $('.show_withdraw_list').fadeOut(0);
        $('.show_withdraw_list_btn').fadeIn();
    });
});

$(function () {
  var scrollVal = $(window).scrollTop();
  $('#game_submit').click(function(){
      $('.pop_container').fadeIn();
      $('body').addClass('overflow_hidden');
//      $('.pop_container').css('top',scrollVal);
  });
  $('.game_list_close').click(function(){
      $('.pop_container').fadeOut();
      $('body').removeClass('overflow_hidden');
  });
  
});

$(function(){
    $('.click_toggle').click(function(){
        $(this).toggleClass('gray_bg');
    });
});


$(function(){
    $('.next_step').click(function(){
        $(this).parents("li").fadeOut(0).next().fadeIn();
    });
    $('.prev_step').click(function(){
        $(this).parents("li").fadeOut(0).prev().fadeIn();
    });
});

