const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world;

var database
var gameState = 0;
var playerCount;
var player1,player2,players
var form,game,player
var allPlayers
var rando
var land
var mountainImg,caveImg,forestImg,plainsImg,volcanoImg,mainImg
var boxes = [];
var coins = []

function preload(){
  mountainImg = loadImage("mountain.jpg")
  caveImg = loadImage('cave.jpg')
  forestImg = loadImage("forest.jpg")
  plainsImg = loadImage('plains.png')
  volcanoImg = loadImage("volcano.png")
  mainImg = loadImage("Main background1.jpg")
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  engine = Engine.create();
  world = engine.world;
  rando = Math.round(random(1,2))
  if(rando===1){
    player1 = new Player(100,854,45,119,"B")
    player2 = new Player(200,854,55,119,"P")
}else{
    player1 = new Player(100,854,55,119,"P")
    player2 = new Player(200,854,45,119,"B")
}
  
land = new Ground(837.5,855,1674,10)
  
game = new Game();
game.getState();
game.start();


}

function draw() {
  Engine.update(engine);
  background(mainImg);
 
    
  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }



}
