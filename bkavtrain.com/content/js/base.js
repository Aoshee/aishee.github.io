var regxUser = /^[A-Za-z0-9 ]{3,20}$/;
var regxEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var regxPassword = /^[A-Za-z0-9_]{1,20}$/;

function checkForm(form) {
    var username = form.username.value;
    var email = form.email.value;
    var password = form.password.value;
    var confirmPass = form.conPassword.value;
    var errors = [];

    if (!regxUser.test(username)) {
        errors[errors.length] = "Please enter the Username valid.";
    }

    if (!regxEmail.test(email)) {
        errors[errors.length] = "Please enter the Email valid.";
    }
    if (password == confirmPass) {
        if (!regxPassword.test(password)) {
            errors[errors.length] = "Please enter a valid Password min 6 char.";
        }
    } else {
        errors[errors.length] = "Password do not match, please try again";
    }

    if (errors.length > 0) {
        alertError(errors);
        return false;
    }

    return true;
}

function alertError(errors) {
    var mes = "Please enter valid data..\n";
    for (var i = 0; i < errors.length; i++) {
        var numError = i + 1;
        mes += "\n" + numError + ". " + errors[i];
    }
    alert(mes);
}