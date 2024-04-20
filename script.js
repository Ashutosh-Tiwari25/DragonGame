// Board
let board;
let boardWidth = 850;
let boardHeight = 250;
let context;

// Dino
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

    // Draw initial dinosaur
    //context.fillStyle = "green";
    //context.fillRect(dinoX, dinoY, dino.width, dino.height);

    dinoImg = new Image();
    dinoImg.src = "C:\Users\ashut\Downloads\img\dino.png/dino.png;"
    dinoImg.onload = function () {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    };
   
    
}

// Cactus
let cactusArray = [];
let cactusHeight = 78;
let cactus1Width = 44;
let cactus2Width = 70;
let cactus3Width = 100;

let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img = new Image();
cactus1Img.src = "C:\Users\ashut\Downloads\img\cactus1.png";
