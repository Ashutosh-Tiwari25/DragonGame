// Board
let board;
let boardWidth = 750;
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
  width: dinoWidth,
};
// Cactus
let cactusArray = [];

let cactus1Width = 44;
let cactus2Width = 79;
let cactus3Width = 102;

let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;

//physics
let velocityX = -8;
let velocityY = 0;
let gravity = 0.4;

let gameOver = false;
let score = 0;

// const placeCactus = () =>{

// }

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;

  context = board.getContext("2d");

  // Draw initial dinosaur
  //context.fillStyle = "green";
  //context.fillRect(dinoX, dinoY, dino.width, dino.height);

  dinoImg = new Image();
  dinoImg.src = "./img/dino.png";
  dinoImg.onload = function () {
    //dino
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
  document.addEventListener("space", moveDino)
};

function update() {
  requestAnimationFrame(update);

context.clearRect(0, 0, board.width, board.height);

  // dino
  context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

  // cactus
  for (let i = 0; i < cactusArray.length; i++) {
    let cactus = cactusArray[i];
    cactus.x += velocityX;
    if (cactus.img) {
      // Check if image is loaded
      context.drawImage(
        cactus.img,
        cactus.x,
        cactus.y,
        cactus.width,
        cactus.height
      );
    }

}
  let cactus = {
    img: null,
    x: cactusX,
    y: cactusY,
    width: null,
    height: cactusHeight,
  };
  let PlaceCactusChance = Math.random(); //0-0.999

  if (PlaceCactusChance > 0.9) {
    //10 percent you get Cactus 3
    cactus.img = cactus3Img;
    cactus.width = cactus3Width;
    cactusArray.push(cactus);
  } else if (PlaceCactusChance > 0.7) {
    // 30 percent you get cactus 2
    cactus.img = cactus2Img;
    cactus.width = cactus2Width;
    cactusArray.push(cactus);
  } else if (PlaceCactusChance > 0.5) {
    //50 percent you get cactus 1 }
    cactus.img = cactus1Img;
    cactus.width = cactus1Width;
    cactusArray.push(cactus);
  }
   if (cactusArray.length > 5){
       cactusArray.shift(); // remove the first element from the array to the area
   }
}

