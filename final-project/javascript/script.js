// accordion faqs
$(function () {
    $(".accordion").accordion();
});

// let again = $('.again');
// $('.accordion').on('click', function(){


//     })


// counter

$(document).ready(function () {
    $(".counter").counterUp();
});



// contact form validation 
// at work page  

$(document).ready(function () {
    $('#contact-form').validate({
        rules: {
            firstname: {
                required: true
            },
            lastname: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            companyname: {
                required: true,
            },
            phonenumber: {
                required: true,
                minlength: 1,
                maxlength: 12
            },
            textboxmessage: {
                required: true
            },
            checkbox: {
                required: true
            }
        }, messages: {
            firstname: {
                required: "Please enter first name"
            },
            lastname: {
                required: "Please enter last name",
            },
            email: {
                required: "Please enter your email",
                email: "Enter valid email"
            },
            companyname: {
                required: "Please enter company name",
            },
            phonenumber: {
                required: "Please enter your phone number",
                minlength: "Valid phone number",
                maxlength: "Valid phone number"
            },
            textboxmessage: {
                required: "Please provid ea message"
            },
            checkbox: {
                required: "tick the box before proceed"
            }

        }, submitHandler: function (form) {
            form.submit()
        }


    })

});


 // login form validate
$(document).ready(function () {
    $('#login-form-validation').validate({
        rules: {
            loginemail: {
                required: true,
                email: true
            },
            loginpassword: {
                required: true,
                minlength: 8,
                passwordRegex: true

            }
        }, messages: {
            loginemail: {
                required: "Please fill out this",
                email: "Please enter a valid email"
            },
            loginpassword: {
                required: "Please enter your password",
                minlength: "Password should be 8 characters long"
            }
        }, submitHandler: function (form) {
            alert("Login Successfully");
            form.submit()
        }
    })

});


$('.show').click(function () {
    let password = $('.password')
    password.attr('type', password.attr('type') === 'password' ? 'text' : 'password');
    $('.show').toggleClass('fa-eye fa-eye-slash')
})

$.validator.addMethod("passwordRegex", function (value, element) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
}, "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.");


//email submit
// home page

$(document).ready(function(){
    $('#email-submit-form').validate({
        rules: {
            emailsubmit: {
                required: true,
                email: true
            },
            emailcheckbox: {
                required: true,

            }
        }, messages: {
            emailsubmit: {
                required: "Must be avalid email address",
                email: "Must be avalid email address"
            },
            emailcheckbox: {
                required: "Check bofore proceed"

            }
        }, submitHandler: function (form) {
            form.submit()
        }
    })
});
