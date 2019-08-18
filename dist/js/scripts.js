// Обработка и отправка формы через AJXA
$(document).ready(function () {
    // валидация формы
    $('#offer-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userphone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: "Укажите имя",
                minlength: jQuery.validator.format("Ещё {0} символа"),
                maxlength: jQuery.validator.format("Надо меньше {0} символов")
            },
            email: {
                required: "Нам нужен ваш email",
                email: "email введен не верно"
            },
            userphone: {
                required: "Укажите телефон"
            }
        },

        errorClass: "invalid",
        errorElement: "label"

    });

    $('#brif-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userphone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: "Укажите имя",
                minlength: jQuery.validator.format("Ещё {0} символа"),
                maxlength: jQuery.validator.format("Надо меньше {0} символов")
            },
            email: {
                required: "Нам нужен ваш email",
                email: "email введен не верно"
            },
            userphone: {
                required: "Укажите телефон"
            }
        },

        errorClass: "invalid",
        errorElement: "label"

    });

    $('#offer-formms').validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userphone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: "Укажите имя",
                minlength: jQuery.validator.format("Ещё {0} символа"),
                maxlength: jQuery.validator.format("Надо меньше {0} символов")
            },
            email: {
                required: "Нам нужен ваш email",
                email: "email введен не верно"
            },
            userphone: {
                required: "Укажите телефон"
            }
        },

        errorClass: "invalid",
        errorElement: "label"

    });
 
    // маска для телефона
    $('.phone').mask('+7 (999) 999-99-99');

    $('form').on('submit', function (event) {
        event.preventDefault();
        var username = $('.username').val();
        var userphone = $('.userphone').val();
        if (username == '' || userphone == '') {
            valid = false;
            return valid;
        }

        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function (valid) {
                if (valid == true) {                
                $('#modalmini').addClass('modalmini_active');
                $("form").trigger('reset');
            } 
        }

        });
    });

    $('.success').html(data['username'] + ', Ваша форма отправлена');

});