//board
let board;
let boardWidth= 750 ;
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
context.fillStyle="red";
context.fillRect(dinoX,dinoY,dino.width, dino.height);

dinoImg= new Image();
dinoImg.src="./img/dino.png/";
dinoImg.onload= function(){
context.drawImg(dino.Img, dino.x, dino.y,dino.width,dino.height);

}