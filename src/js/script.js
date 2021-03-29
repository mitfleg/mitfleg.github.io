function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {
   
   if (support == true) {
   document.querySelector('body').classList.add('webp');
   }else{
   document.querySelector('body').classList.add('no-webp');
   }
});
@@include('bvselect.js');

$(document).ready(function(){
   $('.drop__menu').on('mouseenter', function(){
      $('.sub__menu').addClass('active');
      $('.svg-bx_bxs-right-arrow-dims').attr('style','transform: rotate(90deg);')
   })
   $('.drop__menu').on('mouseleave', function(){
      $('.sub__menu').removeClass('active');
      $('.svg-bx_bxs-right-arrow-dims').attr('style','transform: rotate(0deg);')
   })
   $('.task').on('mouseenter', function(){
      $(this).find('.task__info').addClass('active');
   })
   $('.task').on('mouseleave', function(){
      $('.task__info').removeClass('active');
   })
   $('.header__menu_mob').on('click', function(){
      $('.offset-2').toggleClass('active__menu');
      $('.header__menu_mob').toggleClass('active__burder');
      $('.callback').toggleClass('active__callback');
   })
});