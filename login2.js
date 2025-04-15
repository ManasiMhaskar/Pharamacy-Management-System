function validation() {
    var nm = /^[A-Za-z ]+$/;
    if (document.forms.Formfill.Username.value == "") {
        document.getElementById("result").innerHTML = "Enter Username*"
        return false;
    }
    else if (document.forms.Formfill.Username.value.length < 6) {
        document.getElementById("result").innerHTML = "Atleast username must contain 6 letters*"
        return false;
    }
    // else if(document.forms.Formfill.Username.value.test(nm)){
    //     document.getElementById("result").innerHTML = " "
    // }
    else if (document.forms.Formfill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter your E-mail*"
        return false;
    }
    else if (document.forms.Formfill.Password.value == "") {
        document.getElementById("result").innerHTML = "Enter Password*"
        return false;
    }
    else if (document.forms.Formfill.Password.value.length < 6) {
        document.getElementById("result").innerHTML = "Password must be 6 digits*"
        return false;
    }
    else if (document.forms.Formfill.cPassword.value == "") {
        document.getElementById("result").innerHTML = "Enter Confirm Password*"
        return false;
    }
    else if (document.forms.Formfill.Password.value != document.forms.Formfill.cPassword.value) {
        document.getElementById("result").innerHTML = "Password doesn't match*"
        return false;
    }
    else if (document.forms.Formfill.Password.value == document.forms.Formfill.cPassword.value) {
        var popup = document.getElementById("popup");
        popup.classList.add("open-slide")
        return false;
    }
}

function closeSlide() {
    popup.classList.remove("open-slide")
    with (window.document.forms.Formfill) {
        Username.value = ""
        Email.value = ""
        Password.value = ""
        cPassword.value = ""
    }
}


