let boardWidth = 750; //here board is the id set in HTML 
let boardHeight = 250;//know the difference between : and = in code
let context;

//dino
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY= boardHeight-dinoHeight;
let dinoImg ;

let dino = {
    x: dinoX,
    y: dinoY,
    width: dinoWidth,
    height:dinoHeight
}

window.onload= function() {
    board=document.getElementById("board")
    board.height=boardHeight;
    board.width=boardWidth;
    
    context= board.getContext("2d");// used for drawing on the board
    //draw initial dianasour 
    context.fillStyle="green"
    context.fillRect(dino.x,dino.y,dino.width,dino.height);
}
