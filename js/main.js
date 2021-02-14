(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
$(document).ready(function(){
        $(".menu-right").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            jQuery('body,html').animate({scrollTop: top}, 1500);
        });
            $(window).scroll(function(){
                
                if($(window).scrollTop()>1500){
                    $(function() {
                        $.each($('.up1'), function(i, el) {
                          setTimeout(function() {
                            $(el).attr('style:','opacity:1');
                            $(el).addClass("animate__animated animate__fadeInUp");
                          }, 100 + (i * 100));
                      
                        });
                      });
                }
                if($(window).scrollTop()>2500){
                    $(function() {
                        $.each($('.up2'), function(i, el) {
                          setTimeout(function() {
                            $(el).attr('style:','opacity:1');
                            $(el).addClass("animate__animated animate__fadeInUp");
                          }, 100 + (i * 100));
                      
                        });
                      });
                }
                if($(window).scrollTop()>500){
                    $(function() {
                        $.each($('.up3'), function(i, el) {
                          setTimeout(function() {
                            $(el).attr('style:','opacity:1');
                            $(el).addClass("animate__animated animate__fadeInUp");
                          }, 100 + (i * 100));
                      
                        });
                      });
                }
                if($(window).scrollTop()>3300){
                    $(function() {
                        $.each($('.up4'), function(i, el) {
                          setTimeout(function() {
                            $(el).attr('style:','opacity:1');
                            $(el).addClass("animate__animated animate__fadeInUp");
                          }, 100 + (i * 100));
                      
                        });
                      });
                }
                if($(window).scrollTop()>4000){
                    $(function() {
                        $.each($('.up5'), function(i, el) {
                          setTimeout(function() {
                            $(el).attr('style:','opacity:1');
                            $(el).addClass("animate__animated animate__fadeInUp");
                          }, 100 + (i * 100));
                      
                        });
                      });
                }
                if($(window).scrollTop()>4800){
                    $(function() {
                        $.each($('.up6'), function(i, el) {
                          setTimeout(function() {
                            $(el).attr('style:','opacity:1');
                            $(el).addClass("animate__animated animate__fadeInUp");
                          }, 100 + (i * 100));
                      
                        });
                      });
                }
            });
           
});
$(function(){
    $.fn.scrollToTop=function(){
      $(this).hide().removeAttr("href");
      if($(window).scrollTop()!="0"){
          $(this).fadeIn("slow")
    }
    var scrollDiv=$(this);
    $(window).scroll(function(){
      if($(window).scrollTop()=="0"){
      $(scrollDiv).fadeOut("slow")
      }else{
      $(scrollDiv).fadeIn("slow")
    }
    });
      $(this).click(function(){
        $("html, body").animate({scrollTop:0},"slow")
      })
    }
  });
$(function() {$("#toTop").scrollToTop();});

    