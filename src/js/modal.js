$(document).ready(function() {
   var button = $('#button');
   var modal = $('#modal');
   var close = $('#close');
   var cardLink = $('.card__link');

   button.on('click', function() {
       modal.addClass('modal_active');
   });

   cardLink.on('click', function(event) {
       event.preventDefault();
       modal.addClass('modal_active');
    //    нет в index.html
       var target = $(this).attr('data-target'); // см урок 19 видео 2 с 10 мин
       $('.modal-content__tab').hide(); // см урок 19 видео с 10 мин
       $('#' + target).show();    //    $('.modal-content').load("target+".html); // см урок 19 видео 2 с 10 мин
   });


   close.on('click', function() {
        modal.removeClass('modal_active');
   });

});