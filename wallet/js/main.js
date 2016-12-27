$(document).ready(function () {
  $('.main-content-nav > li').on('click', function () {
    var tab_id = $(this).attr('data-tab');
    $('.main-content-nav >li').removeClass('active');
    $('.main-content').hide().removeClass('active');
    $(this).addClass('active');
    $("#" + tab_id).stop(true).show().addClass('active');
  });
  
  
  $('.bill-show').click(function(){
    $('.audit-box').fadeIn();
  });
  $('.show-end').click(function(){
    $('.audit-box').fadeOut(0);
    $('.audit-end').fadeIn(0);
  });
  $('.bill-hide').click(function(){
    $('.audit-box,.audit-end').fadeOut();
  });
  
  $('.deposit-show').click(function(){
    $('.deposit-box').fadeIn();
  });
  $('.deposit-hide').click(function(){
    $('.deposit-box').fadeOut();
  });
  
  $(function(){
    $('.next').click(function(){
        $(this).parents("li").fadeOut(0).next().fadeIn();
    });
    $('.prev').click(function(){
        $(this).parents("li").fadeOut(0).prev().fadeIn();
    });
  });
  
  $(function(){
    $('.next.deposit-hide').click(function(){
        $('.deposit-box li:first-child').css('display','block');
    });
  });
  
  
  $('.deposit-online-show').click(function(){
    $('.deposit-online-box').fadeIn();
  });
  $('.deposit-online-hide').click(function(){
    $('.deposit-online-box').fadeOut();
  });
  
  $(function(){
    $('.next.deposit-online-hide').click(function(){
        $('.deposit-online-box li:first-child').css('display','block');
    });
  });
  
  $('.alert-close').click(function(){
    $('.alert-message').fadeOut();
  });
  $('.show-alert , .show-list').click(function(){
    $('.alert-message').fadeIn();
  });
  
  $('.hide-inbox-message').click(function(){
    $('.inbox-message').fadeOut();
  });
  $('.show-inbox-message').click(function(){
    $('.inbox-message').fadeIn();
  });
  
  
  $('.show-full').click(function(){
    $('.main').removeClass('main').addClass('main-full');
  });
  $('.hide-full').click(function(){
    $('.main-full').removeClass('main-full').addClass('main');
  })
});
