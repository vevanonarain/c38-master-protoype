var database;
var gameState=0;
var runnerCount;
var form,runner,game;
var runners;

function setup(){
  database = firebase.database();
  createCanvas(displayWidth/2+600, displayHeight/2+250);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  if(runnerCount === 4){
     game.update(1);
  }
  if(gameState === 1){
     clear();
     game.play();
  }
}