var user_key = sessionStorage.key(0);
let session_user = JSON.parse(sessionStorage.getItem(user_key));
let user_details;
let new_user_details;
let details;
let score_details = [];

var user_name = (session_user.Name);

document.getElementById("welcome-text").innerHTML = "WELCOME " + user_name;

// LOOP TO STORE OBJECTS IN AN ARRAY
for (var i = 0; i < localStorage.length; i++) {
    var userId = localStorage.key(i);

    user_details = JSON.parse(localStorage.getItem(userId));

    score_details.push(user_details)
}

// CALL FUNCTION
sortArray();

// FUNCTION TO SORT THE ARRAY OF OBJECTS IN DESCENDING ORDER
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

// FUNCTION TO SAVE THE ARRAY OF OBJECTS' ELEMENTS IN LOCAL STORAGE
function save_sorted_to_local_storage() {
    localStorage.clear()
    for (var index = 0; index < score_details.length; index++) {
        var user_id = score_details[index].ID;
        details = score_details[index];

        details_string = JSON.stringify(details);
        localStorage.setItem(user_id, details_string);

        document.getElementById("name" + index).innerHTML = (details.Name);
        document.getElementById("score" + index).innerHTML = (details.Highscore);
        continue;
    }
}