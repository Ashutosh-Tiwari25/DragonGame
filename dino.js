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
};

// Cactus
let cactusArray = [];
let cactusHeight = 78;
let cactus1Width = 44;
let cactus2Width = 70;
let cactus3Width = 100;

let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;

window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d");

    dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = function () {
        // Draw the initial dinosaur
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    };

    cactus1Img = new Image();
    cactus1Img.src = "./img/cactus1.png";

    cactus2Img = new Image();
    cactus2Img.src = "./img/cactus2.png";

    cactus3Img = new Image();
    cactus3Img.src = "./img/cactus3.png";

    requestAnimationFrame(update);
    setInterval(placeCactus, 1000);
};

function update() {
    requestAnimationFrame(update);

    //cactus
    for (let i = 0; i < cactusArray.length; i++) {
        let cactus = cactusArray[i];
        // Make sure velocityX is defined or adjust accordingly
        let velocityX = 1; // Adjust this value as needed
        cactus.x += velocityX;
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);
    }
}

function placeCactus() {
    // Place cactus
    let cactus = {
        img: null,
        x: cactusX,
        y: cactusY,
        width: null,
        height: cactusHeight
    };
    
    let placeCactusChance = Math.random(); //0-0.999

    if (placeCactusChance > 0.90) { // 10 percent you get Cactus 3
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
    } else if (placeCactusChance > 0.70) { // 30 percent you get cactus 2
        cactus.img = cactus2Img;
        cactus.width = cactus2Width;
    } else if (placeCactusChance > 0.50) { // 50 percent you get cactus 1
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
    }

    cactusArray.push(cactus);
}
