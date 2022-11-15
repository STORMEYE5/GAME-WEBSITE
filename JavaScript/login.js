var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

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

function save_local_storage(){
    var userId = document.getElementById("register_userId").value;
    var email_address = document.getElementById("email_address").value;
    var user_password = document.getElementById("register_password").value;

    localStorage.setItem('USER ID', userId);
    localStorage.setItem('EMAIL ADDRESS', email_address);
    localStorage.setItem('PASSWORD', user_password);
}

function compare_login(){
    var userId = localStorage.getItem('USER ID');
    var user_password = localStorage.getItem('PASSWORD');

    var input_id = document.getElementById("login_userId").value;
    var input_password = document.getElementById("login_password").value;

    localStorage.setItem('ID', input_id);
    localStorage.setItem('EMAIL', input_password);

    if (input_id == userId && user_password == input_password) {
        window.location.href="game.php";
        alert('ACCEPTED CREDENTIALS')
    } else {
        alert('WRONG CREDENTIALS');
    }
}