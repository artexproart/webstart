
// показывать карту при докрутке

// var reviews = $('.reviews');
// var reviewsTop = reviews.offset().top;

// $(window).bind('scroll', function(){
//     var windowTop = $(this).scrollTop();
//     if (windowTop > reviewsTop) {
//         // console.log('Докрутили');
//         $('#map').html('<script type="text/javascript" charset="utf-8" async alt="Карта" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0bcbc7752553d3fc6f8b508cca786e59972971efb94c3188eae46bd3ad36837a&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=folse"></script>');
//         $(window).unbind('scroll');
//     }
// });



var YaMapsShown = false; 
$(document).ready(function (){

 $(window).scroll(function() {
    if (!YaMapsShown){
     if($(window).scrollTop() + $(window).height() > $(document).height() - 700) {      
      showYaMaps();
      YaMapsShown = true;
     }
    }
 });
 

function showYaMaps(){
 var script   = document.createElement("script");
 script.type  = "text/javascript";
 script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0bcbc7752553d3fc6f8b508cca786e59972971efb94c3188eae46bd3ad36837a&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=folse";
 document.getElementById("map").appendChild(script);
}
});