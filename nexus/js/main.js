jQuery(document).ready(function($) {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true
  });
  $('.nav-trigger').click(function(e){
    $('body').toggleClass('menu-active');
  });
  $(document).on('click', function(e){
    var $trigger = $(".nav-trigger");
    if($trigger !== e.target && !$trigger.has(e.target).length){
      $('body').removeClass('menu-active'); 
    }  
  });
  $('.cta.hide-finance').click(function(){
    $('.finance-breakdown').toggleClass('active');
    $(this).toggleClass('active');
  });
  $('.footer-responsive .footer-filter').click(function () {
    $(this).parent().toggleClass('active');
  });
  $('.nav-tab').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).addClass('active').siblings().removeClass('active');
      $($(this).attr('href')).addClass('active').siblings().removeClass('active');
  });
  $('.nav-tab').click(function(){
      $('html,body').animate({
      scrollTop: $(this).offset().top-75},'200');
  });
  $(".back-to-top").on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $("html, body").offset().top },400);
    });
})