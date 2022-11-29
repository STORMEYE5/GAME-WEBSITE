var user_key = sessionStorage.key(0);
let session_user = JSON.parse(sessionStorage.getItem(user_key));
let user_details;
let new_user_details;
let board_details;
let details;
let score_details = [];
var temp_array1;

window.onload = function() {
    var user_name = (session_user.Name);

    document.getElementById("welcome-text").innerHTML = "WELCOME " + user_name;

    var i, local_key;
    for (i = 0; i < localStorage.length; i++) {
        local_key = localStorage.key(i);
        user_details = JSON.parse(localStorage.getItem(local_key));

        localStorage.removeItem(user_details.Highscore);

        var random = randomXToY(101, 999);

        new_user_details = Object.assign(user_details,{Highscore : random});

        localStorage.setItem(local_key, JSON.stringify(new_user_details));
        score_details.push(user_details.Highscore)
    }

    sortArray();
}

function sortArray() {
    for (j = 0; j < score_details.length; j++) {
        if (score_details[j + 1] < score_details[j]){
            temp_array1 = score_details[j];
            score_details[j] = score_details[j+1];
            score_details[j+1] = temp_array1;
        }
    }
}

function randomXToY(minVal,maxVal)
{
  var randVal = minVal+(Math.random()*(maxVal-minVal));
  return Math.round(randVal);
}