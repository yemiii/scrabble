var canvas;
var ctx;

//create input variables
var upKey;
var rightKey;
var downKey;
var leftKey;

// create game variables
var gameLoop;
var player;



window.onload = function() {
    console.log("hello");
canvas = document.getElementById("game-canvas");
ctx = canvas.getContext("2d");
//start game loop
gameLoop = setInterval(step, 1000/30);
}


// create player
player = new Player(100, 400);





function step() {
    // step.player
    player.step();

    //draw everything
    draw();
}

function draw() {
    console.log("hi");
    // clear the canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1200,720);

    //draw the player
    player.draw();
}

function setupInputs() {
    document.addEventListener("keydown", function(event){
        if (event.key === "w" || event.key === "arrowUp") {
            upKey = true;
        } else if (event.key === "a" || event.key === "arrowLeft") {
            leftKey = true;
        } else if (event.key === "s" || event.key === "arrowDown") {
            downKey = true;
        } else if (event.key === "d" || event.key === "arrowRight") {
            rightKey = true;
        }

    });

    document.addEventListener("keyup", function(event){
        if (event.key === "w" || event.key === "arrowUp") {
            upKey = false;
        } else if (event.key === "a" || event.key === "arrowLeft") {
            leftKey = false;
        } else if (event.key === "s" || event.key === "arrowDown") {
            downKey = false;
        } else if (event.key === "d" || event.key === "arrowRight") {
            rightKey = false;
        }

    });

}