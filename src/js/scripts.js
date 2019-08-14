// Обработка и отправка формы через AJXA
$('offers-form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
        url: '../mail.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
            console.log(data);
            $('.success').html(data['username'] + ', Ваша форма отправлена');
        },
        error: function(jqXHR, taxtStatus) {
            console.log(jqXHR + ': ' + taxtStatus); 
        }
    });
}); 