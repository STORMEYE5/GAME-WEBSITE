window.onload = function () {
    // let btn_click = document.getElementById("click");
    // btn_click.onclick = update();
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Clip a rectangular area
ctx.rect(0, 0, c.width, c.height);
ctx.stroke();
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
var context3 = canvas2.getContext("2d");

var rndNum = Math.floor((Math.random() * 6) + 1);
document.getElementById("click").innerHTML = rndNum;

let dx = -58;
let dy = -58;

let x = 650;
let y = 660;
let x2 = 650;
let y2 = 630;

const myInterval = setInterval(draw, 1000);

function draw() {
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
    context2.beginPath()
    context2.arc(x2, y2, 13, 0, 2 * Math.PI);
    context2.fillStyle = "blue";
    context2.fill();
    context2.closePath();

    context3.beginPath()
    context3.arc(x, y, 13, 0, 2 * Math.PI);
    context3.fillStyle = "red";
    context3.fill();
    context3.closePath();

    for (let num = 0; num < rndNum; num++) {
        if (x == 650 && y == 660) {
            x += -72;
            continue;
        } 
        if (x < 600 && x > 150 && y == 660) {
            x += dx;
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
            y += dy;
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
        } 
    }
    clearInterval(myInterval);
}

// draw();

// function update() {
//     draw();
// }


// let current;
// class Grid{
//     constructor() {
//         this.rows = 11;
//         this.columns = 11;
//         this.grid = [];
//     }

//     grid_setup() {
//         for (let r = 0; r < this.rows; r++) {
//             let row = [];
//             for (let col = 0; col < this.columns; col++) {
//                 let cell = new Cell(r, col);
//                 row.push(cell)
//             }
//             this.grid.push(row);
//         }
//         current = this.grid[0][0];
//     }
// }

// class Cell{
//     constructor(rowNum, colNum){
//         this.rowNum=rowNum;
//         this.colNum=colNum;
//     }
// }

// let newGrid = new Grid
// newGrid.grid_setup()