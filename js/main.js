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
      $(function() {

          $(window).scroll(function() {
          if($(this).scrollTop() != 0) {
          $('#toTop').fadeIn();
          } else {
          $('#toTop').fadeOut();
          }
          });
          $('#toTop').click(function() {
          $('body,html').animate({scrollTop:0},800);
          });
           
          });
      $(".btn-link").click(function(){
          if ($('.btn-link').hasClass('collapsed')){
              $('.btn-link').text('Скрыть');
          }
          else{
              $('.btn-link').text('Далее');
          }
      });
      $(".burger").click(function(){
          $(".burger").toggleClass('active_burg')
          $(".nav").toggleClass('active')
          $(".programm").toggleClass('active_swipe')
          if($('.burger').hasClass('active_burg')){
              $('html, body').css('overflow', 'hidden');
          }
          else{
              $('html, body').css('overflow', '')
          }
          $(".link-main").toggleClass('link')
          $(".link").click(function(){
              $(".programm").toggleClass('active_swipe')
              $(".burger").toggleClass('active_burg')
              $(".nav").toggleClass('active')
              $('html, body').css('overflow', '')
          });
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
    let inputs = document.querySelectorAll('.count-file1');
    let inputs2 = document.querySelectorAll('.count-file2');
        Array.prototype.forEach.call(inputs, function (input) {
            let label = input.nextElementSibling,
                labelVal = label.querySelector('.count-text1').innerText;

            input.addEventListener('change', function (e) {
                let countFiles = '';
                if (this.files && this.files.length >= 1)
                    countFiles = this.files.length;

                if (countFiles)
                    label.querySelector('.count-text1').innerText = 'Выбрано файлов: ' +
                    countFiles;
                else
                    label.querySelector('.count-text1').innerText = labelVal;
            });
        });
        Array.prototype.forEach.call(inputs2, function (input) {
          let label = input.nextElementSibling,
              labelVal = label.querySelector('.count-text2').innerText;

          input.addEventListener('change', function (e) {
              let countFiles = '';
              if (this.files && this.files.length >= 1)
                  countFiles = this.files.length;

              if (countFiles)
                  label.querySelector('.count-text2').innerText = 'Выбрано файлов: ' +
                  countFiles;
              else
                  label.querySelector('.count-text2').innerText = labelVal;
          });
      });
});
