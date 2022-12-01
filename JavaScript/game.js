var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// var box_clip = document.getElementsByClassName("game-box")

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
