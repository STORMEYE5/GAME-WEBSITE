var user_key = sessionStorage.key(0);
let session_user = JSON.parse(sessionStorage.getItem(user_key));

var user_name = (session_user.Name);

document.getElementById("welcome-text").innerHTML = "WELCOME " + user_name;