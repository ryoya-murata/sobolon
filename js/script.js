$(function(){
    $('a[href^="#"]').click(function(){　　  
        var speed = 500;　　　　                                                      
        var adjust = $('.header').innerHeight();                                       
        var href= $(this).attr("href");　　　                                        
        var target = $(href == "#" ? 'html' : href);                                 
        var position = target.offset().top;　                                       
        $("html, body").animate({scrollTop:position - adjust}, speed, "swing");    　
        return false;
      });

})


$(function () {
    // クリック時の動作
    $('.hamberger__line-wrap').on('click', function() {
        var scrollpos;

        // メニューを閉じる
        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.hamberger-menu').removeClass('open');


        // メニューを開く
        } else {
            $(this).addClass('open');
            $('.hamberger-menu').addClass('open');
        }
    });
});

$(document).ready(function () {

    $('.form').submit(function (event) {
      var formData = $('.form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScTpUcHZbj0bIvmRE1_ZLV3UP3vAg1Iq-5M6OEbPmm6alO8fw/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".form__end-message").slideDown();
            $(".button--submit,.form").fadeOut();
            //window.location.href = "thanks.html";
          },
          200: function () {
            $(".form__false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

    let $submit = $('#js-submit')
    $('#form input , #form textarea').on( 'change', function(){
        if(
            $( '#form input[type="text"]').val() !== "" &&
            $( '#form input[type="email"]').val() !== "" &&
            $( '#form textarea[name="entry.622939215"]').val() !== "" &&
            $( '#form input[name="entry.1340125865"]').prop('checked') === true
        ){
            $submit.prop('disabled', false)
            $submit.addClass('button--active')
        } else {
            $submit.prop('disabled',true)
            $submit.removeClass('button--active')
        }
    })

  });

  $(function(){
    $(window).scroll(function(){
        var adjust = $(".header").innerHeight();
        var scrollTop = $(window).scrollTop() + 400 ;
        var conceptTop = $(".concept").offset().top;
        var conceptBottom = conceptTop + $(".concept").innerHeight();
        var featureTop = $(".feature").offset().top;
        var featureBottom = featureTop + $(".feature").innerHeight();
        var reasonTop = $(".reason").offset().top;
        var reasonBottom = reasonTop + $(".reason").innerHeight();
        var productsTop = $(".products").offset().top;
        var productsBottom = productsTop + $(".products").innerHeight();
        var newsTop = $(".news").offset().top;
        var newsBottom = newsTop + $(".news").innerHeight();
        var mottoTop = $(".motto").offset().top;
        var mottoBottom = mottoTop + $(".motto").innerHeight();
        var contactTop = $(".contact").offset().top;
        var contactBottom = contactTop + $(".contact").innerHeight();

        if(scrollTop >= conceptTop && scrollTop <= conceptBottom){
            $('.concept__contents').addClass('op-1').addClass('tr-after');
        } else if (scrollTop >= featureTop && scrollTop <= featureBottom){
           $('.feature-cards').addClass('op-1').addClass('tr-after');
        } else if (scrollTop >= reasonTop && scrollTop <= reasonBottom){
            $('.reason__inner').addClass('op-1').addClass('tr-after');
        } else if (scrollTop >= productsTop && scrollTop <= productsBottom){
            $('.products-cards').addClass('op-1').addClass('tr-after');
        } else if (scrollTop >= newsTop && scrollTop <= newsBottom){
            $('.news-cards').addClass('op-1').addClass('tr-after');
        } else if(scrollTop >= mottoTop && scrollTop <= mottoBottom){
            $('.motto-contents').addClass('op-1').addClass('tr-after');
        } else if(scrollTop >= contactTop && scrollTop <= contactBottom){
            $('.form').addClass('op-1').addClass('tr-after');
        }
    })
})
