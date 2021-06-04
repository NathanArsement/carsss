var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var obstacle, obstacleImg;
var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("/images/track.jpg");
  car1_img = loadImage("/images/car1.png");
  car2_img = loadImage("/images/car2.png");
  car3_img = loadImage("/images/car3.png");
  car4_img = loadImage("/images/car4.png");
  ground = loadImage("/images/ground.png");
  obstacleImg=loadImage("/images/f1.png")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacle= createGroup();
  for(var i=5; i>=0; i++){
  obs= createSprite(random(150,(windowWidth/2)-150), random(windowHeight*-2, windowHeight*-4), 20, 20);
  obs.addImage(obstacleImg);
  obstacle.add(obs);
  }
  xSet = false;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
   //start the game
   background(200, 200, 255);
  obstacle;
   //start the game
   if (playerCount === 4 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }}
 
  
