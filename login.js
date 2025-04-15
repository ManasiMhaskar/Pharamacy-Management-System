function validate1(){
    var nm1 = document.getElementById("s_user")
    var ps1 = document.getElementById("s_pass")
    let regEx1 = /^[a-zA-Z0-9_]{3,16}$/
        if(!nm1.value.match(regEx1)){
            alert('Invalid username!')
        }
        let regEx2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(!ps1.value.match(regEx2)){
            alert('Invalid password!')
        }
}