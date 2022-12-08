var user_key = sessionStorage.key(0);
let session_user = JSON.parse(sessionStorage.getItem(user_key));
let user_details;
let new_user_details;
let details;
let score_details = [];

window.onload = function() {
    var user_name = (session_user.Name);

    document.getElementById("welcome-text").innerHTML = "WELCOME " + user_name;

    for (var i = 0; i < localStorage.length; i++) {
        var userId = localStorage.key(i);

        user_details = JSON.parse(localStorage.getItem(userId));

        score_details.push(user_details)
    }

    if (localStorage.length > 1) {
        sortArray();
    }
}

function sortArray() {
    for (var j = 1; j < score_details.length; j++) 
    for (var k = 0; k < j; k++)
        if (score_details[j].Highscore > score_details[k].Highscore) {
          var x = score_details[j];
          score_details[j] = score_details[k];
          score_details[k] = x;
        }
    save_sorted_to_local_storage();
}

function save_sorted_to_local_storage() {
    localStorage.clear()
    for (var index = 0; index < score_details.length; index++) {
        user_id = score_details[index].ID;
        details = score_details[index];

        details_string = JSON.stringify(details);
        localStorage.setItem(user_id, details_string);
    }
    display_ranks();
}

function display_ranks() {
    var storage_length;

    if (localStorage.length < 10) {
        storage_length = localStorage.length;
    } else {
        storage_length = 10
    }

    for (var index2 = 0; index2 < storage_length; index2++) {
        // key_value = 0
        key_value = localStorage.key(index2);
        temp_details = JSON.parse(localStorage.getItem(key_value));
        document.getElementById("name" + index2).innerHTML = (temp_details.Name);
        document.getElementById("score" + index2).innerHTML = (temp_details.Highscore);
        
    }
}