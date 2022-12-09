let score = 0;
let money1 = 1500;
let money2 = 1500;
let game_loop1 = 0;
let game_loop2 = 0;
let player1_properties = [];
let player2_properties = [];
let properties = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
let amount = [0, 60, 60, 100, 100, 120, 140, 140, 160, 180, 180, 200, 220, 220, 240, 260, 260, 280, 300, 300, 320, 250, 400]

window.onload = function () {
    update();
    var user_key = sessionStorage.key(0);
    let session_user = JSON.parse(sessionStorage.getItem(user_key));
    var user_name = (session_user.Name);
    document.getElementById("welcome-text").innerHTML = "WELCOME " + user_name;
}

var rndNum;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Clip a rectangular area
ctx.rect(0, 0, c.width, c.height);
ctx.clip();

const img = new Image();
img.src = '../Assets/monopoly-board.jpg';
img.onload = () => {
    ctx.imageSmoothingEnabled = true;
    var factor  = Math.min ( c.width / img.width, c.height / img.height );
    ctx.scale(factor, factor);
    ctx.drawImage(img, 0, 0);
    ctx.scale(1 / factor, 1 / factor);
}

var canvas2 = document.getElementById("myCanvas2");
var context2 = canvas2.getContext("2d");
var canvas3 = document.getElementById("myCanvas3");
var context3 = canvas2.getContext("2d");

function update() {
    turns();
}

let turn = 0;
let player1_turn=false;
let player2_turn=false;

function turns() {  
    if (turn > 1) {
        turn = 0
    }

    if (player1_turn == false && player2_turn == false) {
        context2.clearRect(0, 0, canvas2.width, canvas2.height);
        context3.clearRect(0, 0, canvas3.width, canvas3.height);
        draw();
        draw2();
        player1_turn = true;
    }

    if (turn == 0) {
        player2_turn=false;
        player1_turn=true;
        draw();
        initial_position2();
    } else if (turn == 1) {
        player2_turn=true;
        player1_turn=false;
        draw2();
        initial_position();
    }

    turn++;
    update_score();
}

let dx = -58;
let dy = -58;

let x = 650;
let y = 660;
let x2 = 650;
let y2 = 630;

const myInterval = setInterval(draw, 1000);
const myInterval2 = setInterval(draw2, 1000);

function draw() {    
    if (player1_turn){
        random_generator();
    }
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
   
    context2.beginPath();
    context2.arc(x2, y2, 13, 0, 2 * Math.PI);
    context2.fillStyle = "red";
    context2.fill();
    context2.closePath();

    for (let num = 0; num < rndNum; num++) {
        if (x2 == 650 && y2 == 630) {
            x2 += -72;
            game_loop1++;
            continue;
        }
        if (game_loop1 >= 2){
            if (x2 == 578 && y2 == 630) {
                money1 += 200;
                score += 200;
            }
        }
        if (x2 < 600 && x2 > 150 && y2 == 630) {
            x2 += -58;
            continue;
        }
        if (x2 > 100 && x2 < 150 && y2 == 630) {
            x2 += -72;
            continue;
        } 
        if (x2 < 100 && y2 == 630) {
            y2 += -72;
            continue;
        } 
        if (y2 < 600 && y2 > 100 && x2 < 100) {
            y2 += -58;
            continue;
        }
        if (y2 < 100 && y2 >80 && x2 < 100) {
            y2 += -72;
            continue;
        } 
        if (x2 < 100 && y2 < 100) {
            x2 += 72;
            continue;
        } 
        if (x2 < 550 && x2 > 100 && y2 < 100) {
            x2 += 58;
            continue;
        }
        if (x2 > 550 && x2 < 600 && y2 < 100) {
            x2 += 72;
            continue;
        } 
        if (x2 == 650 && y2 < 80) {
            y2 += 72;
            continue;
        } 
        if (y2 < 520 && y2 > 80 && x2 == 650) {
            y2 += 58;
            continue;
        } 
        if (y2 > 520 && y2 < 600 && x2 == 650) {
            y2 += 72;
            continue;
        } 
    }
    clearInterval(myInterval);
}

function initial_position() {
    context2.beginPath();
    context2.arc(x2, y2, 13, 0, 2 * Math.PI);
    context2.fillStyle = "red";
    context2.fill();
    context2.closePath();
}

function draw2() {
    if (player2_turn){
        random_generator();
    }
    context3.clearRect(0, 0, canvas3.width, canvas3.height);

    context3.beginPath();
    context3.arc(x, y, 13, 0, 2 * Math.PI);
    context3.fillStyle = "blue";
    context3.fill();
    context3.closePath();

    for (let num = 0; num < rndNum; num++) {
        if (x == 650 && y == 660) {
            x += -72;
            game_loop2++;
            continue;
        } 
        if (game_loop2 >= 2){
            if (x == 578 && y == 660) {
                money2 += 200;
                score += 200;
            }
        }
        if (x < 600 && x > 150 && y == 660) {
            x += -58;
            continue;
        }
        if (x > 100 && x < 150 && y == 660) {
            x += -72;
            continue;
        } 
        if (x < 100 && y == 660) {
            y += -72;
            continue;
        } 
        if (y < 600 && y > 150 && x < 100) {
            y += -58;
            continue;
        }
        if (y > 100 && y < 150 && x < 100) {
            y += -72;
            continue;
        } 
        if (x < 100 && y < 100) {
            x += 72;
            continue;
        } 
        if (x < 550 && x > 100 && y < 100) {
            x += 58;
            continue;
        }
        if (x > 550 && x < 600 && y < 100) {
            x += 72;
            continue;
        } 
        if (x == 650 && y < 100) {
            y += 72;
            continue;
        } 
        if (y < 550 && y > 100 && x == 650) {
            y += 58;
            continue;
        } 
        if (y > 550 && y < 600 && x == 650) {
            y += 72;
            continue;
        }
    }
    clearInterval(myInterval2);
}

function initial_position2() {
    context3.beginPath()
    context3.arc(x, y, 13, 0, 2 * Math.PI);
    context3.fillStyle = "blue";
    context3.fill();
    context3.closePath();
}

function update_score(score) {
    document.getElementById("game_score1").innerHTML = "Player1: " + money1;
    document.getElementById("game_score2").innerHTML = "Player2: " + money2;

    var userId = sessionStorage.key(0);

    let parsed_object = JSON.parse(localStorage.getItem(userId));

    var temp_name = (parsed_object.Name);
    var temp_highscore = (parsed_object.Highscore);

    if (score > temp_highscore) {
        sessionStorage.removeItem(parsed_object.Highscore);
        temp_highscore = score;
    }

    let session_object = {
        ID: userId,
        Name: temp_name, 
        Highscore: temp_highscore,
    };

    let session_object_string = JSON.stringify(session_object);
    
    sessionStorage.setItem(userId, session_object_string);

    const highscore = {Highscore: temp_highscore};
    
    const new_user_details = Object.assign(parsed_object, highscore);

    localStorage.setItem(userId, JSON.stringify(new_user_details));
}

function random_generator() {
    rndNum = Math.floor((Math.random() * 6) + 1);
}

function check_properties(index_pos) {
    owned = false;
    if (player1_properties.includes(properties[index_pos])) {
        owned = true;
        alert('owned');
    } else {
        return;
    }
}

function buy() {
    let coordinates = [650, 578, 462, 288, 172, 114]
    let y_coordinates = [630, 558, 442, 384, 268, 152, 94]

    for (var index_pos_y = 0; index_pos_y < y_coordinates.length; index_pos_y++) {
        for (var index_pos = 0; index_pos < coordinates.length; index_pos++) {
            if (x2 == coordinates[index_pos] && y2 == y_coordinates[index_pos_y]) {
                check_properties(index_pos);
                if (owned == false) {
                    money1 -= amount[index_pos];
                    player1_properties.push(properties[index_pos]);
                    score += amount[index_pos];
                    break;
                }
            }
        }
    }
    
    update_score(score);
}