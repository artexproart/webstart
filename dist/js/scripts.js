// Обработка и отправка формы через AJXA
$('#offer-form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
        url: '../mail.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
            // console.log(data);
            $('.success').html(data['username'] + ', Ваша форма отправлена, спасибо большое');
        },
        error: function(jqXHR, taxtStatus) {
            console.log(jqXHR + ': ' + taxtStatus); 
        }
    });
});

$('#offer-forms').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
        url: '../mail.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
            // console.log(data);
            $('.success').html(data['username'] + ', Ваша форма отправлена, спасибо большое');
            $('#modalmini').modal.addClass('modalmini_active');
        },
        error: function(jqXHR, taxtStatus) {
            console.log(jqXHR + ': ' + taxtStatus); 
        }
    });
});

$('#offer-formms').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
        url: '../mail.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
            // console.log(data);
            $('.success').html(data['username'] + ', Ваша форма отправлена');
            $('#modalmini').modal.addClass('modalmini_active');
        },
        error: function(jqXHR, taxtStatus) {
            console.log(jqXHR + ': ' + taxtStatus); 
        }
    });
});

$('.success').html(data['username'] + ', Ваша форма отправлена');
