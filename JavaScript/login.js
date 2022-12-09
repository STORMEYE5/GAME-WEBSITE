let password_check = RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
let btn_click;
let my_object_destring;

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

function registration(e){
    e.preventDefault();
    var reg_userId = document.getElementById("register_userId").value;
    var reg_name = document.getElementById("name").value;
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
            save_to_local_storage(reg_userId, reg_name, reg_email_address, reg_user_password, reg_phone_number, reg_address);
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
                } else {
                    save_to_local_storage(reg_userId, reg_name, reg_email_address, reg_user_password, reg_phone_number, reg_address);
                    break;
                }  
            }
        }
    }
}

function user_login() {
    var sign_id = document.getElementById("login_userId").value;
    var sign_password = document.getElementById("login_password").value;

    if (sessionStorage.length != 0) {
        alert('YOU NEED TO LOG OUT FIRST');
        return;
    }

    for (var j = 0; j < localStorage.length; j++) {
        if (sign_id == localStorage.key(j)) {
            my_object_destring = JSON.parse(localStorage.getItem(sign_id));
            var userId = (my_object_destring.ID);
            var user_password = (my_object_destring.Password);
            break;
        } 
    }

    if ((sign_id) == '' && (sign_password) == '') {
        alert('INVALID CREDENTIALS');
    }
    else {
        if ((sign_id) == userId && (sign_password) == user_password) {
            alert('ACCEPTED CREDENTIALS');
            save_to_session_storage(userId)
            window.location.href = "/GAME_WEBSITE/PHP/game.php";
        } else {
            alert('WRONG CREDENTIALS');
        }
    }
}

function save_to_local_storage(reg_userId, reg_name, reg_email_address, reg_user_password, reg_phone_number, reg_address) {
    let my_object = {
        ID: reg_userId,
        Name: reg_name, 
        Email: reg_email_address,
        Password: reg_user_password,
        "Phone Number": reg_phone_number,
        Address: reg_address,
        Highscore: 0,
    };

    let my_object_string = JSON.stringify(my_object);

    localStorage.setItem(reg_userId, my_object_string);

    alert('SUCCESSFULLY REGISTERED');

    location.reload();
}

function save_to_session_storage(userId) {
    parsed_object = JSON.parse(localStorage.getItem(userId));

    var temp_name = (parsed_object.Name);
    var temp_nhighscore = (parsed_object.Highscore);

    let session_object = {
        ID: userId,
        Name: temp_name, 
        Highscore: 0,
    };

    let session_object_string = JSON.stringify(session_object);

    sessionStorage.setItem(userId, session_object_string);
}

function logout() {
    if (sessionStorage.length != 0) {
        sessionStorage.clear();
        alert('SUCCESSFULLY LOGGED OUT')
    } else {
        alert('YOU ARE NOT LOGGED IN')
    }
}