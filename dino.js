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

// Cactus
let cactusArray = [];
let cactusHeight = 78;
let cactus1Width = 44;
let cactus2Width = 70;
let cactus3Width = 100;

let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img = new Image();
let cactus2Img = new Image();
let cactus3Img = new Image();

window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d");

    dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = function () {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
        requestAnimationFrame(update);
    };

    cactus1Img.src = "./img/cactus1.png";
    cactus2Img.src = "./img/cactus2.png";
    cactus3Img.src = "./img/cactus3.png";

    setInterval(placeCactus, 1000);
}

function update(){
    context.clearRect(0, 0, boardWidth, boardHeight); // Clear the board
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height); // Redraw the dino

    // Draw cacti
    for (let i = 0; i < cactusArray.length; i++) {
        let cactus = cactusArray[i];
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);
    }

    requestAnimationFrame(update);
}

function placeCactus(){
    let cactus = {
        img: null,
        x: cactusX,
        y: cactusY,
        width: null,
        height: cactusHeight
    }
    let letPlaceCactusChance = Math.random(); //0-0.999

    if (letPlaceCactusChance > .90) { //10 percent you get Cactus 3
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
    } else if (letPlaceCactusChance > .70) { // 30 percent you get cactus 2
        cactus.img = cactus2Img;
        cactus.width = cactus2Width;
    } else if (letPlaceCactusChance > .50) { //50 percent you get cactus 1
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
    }

    if (cactus.img) {
        cactusArray.push(cactus);
    }
}
