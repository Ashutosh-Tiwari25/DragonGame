//board
let board;
let boardWidth = 850;
let boardHeight = 250;
let context;

//dino
let dinoWidth = 99;
let dinoHeight = 88;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
    x: dinoX,
    y: dinoY,
    height: dinoHeight,
    width: dinoWidth
}

window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d");

    //draw initial dinosaur
    //context.fillStyle = "green";
    //context.fillRect(dinoX, dinoY, dino.width, dino.height);

    dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = function () {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
        dinoImg.onerror = function() {
            console.error("Error loading dinosaur image");
        };
        
    }
}

//Cactus
let cactusArray = [];
let cactusHeight = 78;
let cactus1Width = 44;
let cactus2Width = 80;
let cactus3Width = 100;

let cactusX = 700;
let cactusY = boardHeight - cactusHeight;
