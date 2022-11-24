let password_check = RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
let btn_click;

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

window.onload = function ()
{
    btn_click = document.getElementsByClassName("submit-btn");

    btn_click[0].onclick = user_login;
    btn_click[1].onclick = registration;

    btn_click[0].disabled = true;
    btn_click[1].disabled = true;

    verified_password = document.getElementById("register_password");
    verified_password.onkeyup = checkRegistrationPassword;

    rnd_password = document.getElementById("login_password");
    rnd_password.onkeyup = checkLoginPassword;
}

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function checkRegistrationPassword() {
    let verified_password = document.getElementById("register_password").value;
    let result = password_check.test(verified_password);

    btn_click[1].disabled = !result;
}

function checkLoginPassword() {
    let rnd_password = document.getElementById("login_password").value;
    let result1 = password_check.test(rnd_password);

    btn_click[0].disabled = !result1;
}

function registration(){
    var reg_userId = document.getElementById("register_userId").value;
    var reg_email_address = document.getElementById("email_address").value;
    var reg_user_password = document.getElementById("register_password").value;
    var reg_phone_number = document.getElementById("phone_Id").value;
    var reg_address = document.getElementById("address_Id").value;

    if (reg_userId == '' && reg_email_address == '' && reg_user_password == '') {
        alert('INVALID CREDENTIALS');
    }
    else {
        userId_check = JSON.parse(localStorage.getItem(reg_userId));

        if (userId_check != null) {
            alert('USERNAME IS ALREADY TAKEN');
        } else if (localStorage.length == 0) {
            save_to_local_storage(reg_userId, reg_email_address, reg_user_password, reg_phone_number, reg_address);
        } else {
            var i, l;
            for (i = 0; i < localStorage.length; i++) {
                l = localStorage.key(i);
                let email_address_check = JSON.parse(localStorage.getItem(l));
                var stored_email = (email_address_check.Email);
                if (reg_email_address == stored_email) {
                    alert('EMAIL IS ALREADY IN USE');
                    break;
                } else if (i != (localStorage.length - 1)) {
                    continue;
                }
                else {
                    save_to_local_storage(reg_userId, reg_email_address, reg_user_password, reg_phone_number, reg_address);
                }  
            }
        }
    }
}

function user_login(){
    let login_input = {
        input_id: (document.getElementById("login_userId").value),
        input_password: (document.getElementById("login_password").value),
    };

    let my_object_destring = JSON.parse(localStorage.getItem(login_input.input_id));

    var userId = (my_object_destring.ID);
    var user_password = (my_object_destring.Password);

    if ((login_input.input_id) == '' && (login_input.input_password) == '') {
        alert('INVALID CREDENTIALS');
    }
    else {
        if ((login_input.input_id) == userId && (login_input.input_password) == user_password) {
            alert('ACCEPTED CREDENTIALS');
            window.location.href = "/GAME_WEBSITE/PHP/game.php";
        } else {
            alert('WRONG CREDENTIALS');
        }
    }
}

function save_to_local_storage(reg_userId, reg_email_address, reg_user_password, reg_phone_number, reg_address) {
    let my_object = {
        ID: reg_userId,
        Email: reg_email_address,
        Password: reg_user_password,
        "Phone Number": reg_phone_number,
        Address: reg_address,
        Highscore: 0,
    };

    let my_object_string = JSON.stringify(my_object);

    localStorage.setItem(reg_userId, my_object_string);

    location.reload();
}