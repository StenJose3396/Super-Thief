var canvas, backgroundImage;
var welcomeSprite, welImg, enter, enterImg
var thief,thiefImg;
var gameState = 0;




function preload(){
  thiefImg = loadImage("images/Thief1.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  welcomeSprite = createSprite(width/2, height/2, width, height)
  welcomeSprite.shapeColor = "darkblue";
  enter = createSprite(width/2 - 50, height/2 + 200, 80, 30 )
  thief = createSprite(width/2,height/2,40,100);
  thief.addImage(thiefImg);
  thief.scale = 0.5;
}


function draw(){
 background(0);
 if(gameState === 0){
  drawSprites();
   textSize(80);
   fill("white");
   strokeWeight(2);
   stroke("green");
   text("Super Thief", width/2 - 50, 50);


   if(mousePressedOver(enter)){
     gameState = 1;
     enter.visible = false;
     welcomeSprite.visible = false;
   }
 }
 if(gameState === 1){
   drawSprites();
 }
 if(keyDown("left")&& thief.x>10){
   thief.x -=10;
 }
 if(keyDown("right")&& thief.x<width-10){
  thief.x +=10;
 }
}
