//board
let board;
let boardWidth= 850;
let boardHeight= 250;
let context ;

//dino
let dinoWidth= 99;
let dinoheight= 88;
let dinoX= 50;
let dinoY= boardHeight-dinoHeight ;
let dinoImg;

let dino = {
    x : dinoX,
    y : dinoY,
    height: dinoHeight,
    width: dinoWidth

}

window.onload = function (){
    board= document.getElementById("board");
    board.height= boardHeight;
    board.width= boardWidth;

    context = board.getContext("2d");
}
//draw initial dinosaur
context.fillStyle="brown";
context.fillRect(dinoX,dinoY,dino.width, dino.height);

dinoImg= new Image();
dinoImg.src="./img/dino.png/";
dinoImg.onload= function(){
context.drawImage(dino.Img, dino.x, dino.y,dino.width,dino.height);
}

//Cactus
let cactusArray= [];
let cactusHeight=78;
let cactus1Width=44;
let cactus2Width=70;
let cactus3Width=100;

cactusX= 700;
cactusY= boardHeight-cactusHeight;


