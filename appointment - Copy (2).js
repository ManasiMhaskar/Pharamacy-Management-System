let Form = document.getElementById("f1")
Form.addEventListener("submit", (e) => {
    // e.preventDefault();

    let f = document.getElementById("fname").value
    let l = document.getElementById("lname").value
    let p = document.getElementById("phone").value
    let m = document.getElementById("mail").value
    let subject = document.getElementById("subject").value
    let body = document.getElementById("message").value
    if (f.value == "" || l.value == "" || p.value == ""||m.value == ""||subject.value == ""||body == "") {
        // throw error
    } else {
        // perform operation with form input
        sendMail()
    }
});

function sendMail() {
    let to = "happylife@gmail.com"
    let subject = document.getElementById("subject").value
    let body = document.getElementById("message").value
    window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body
}