var sky,pig,apple,bear,potato,turnip;
var pigImg,bearImg,skyImg,appleImg,turnipImg,potatoImg;
var treasureCollection = 0;
var potatoG,appleG,turnipG,bearGroup;


var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  skyImg = loadImage("sky.jpg");
  pigImg = loadAnimation("Flying_pig.png");
  appleImg = loadImage("apple.png");
  potatoImg = loadImage("potato.jpg");
  turnipImg = loadImage("turnip.png");
  bearImg = loadImage("bear.jpg");
  endImg =loadAnimation("gameOver.jpg");
}

function setup(){

 createCanvas(windowWidth,windowHeight);


sky=createSprite(width/2,200);
sky.addImage(skyImg);
sky.velocityY = 4;



pig = createSprite(width/2,height-20,20,20);
pig.addAnimation("Flying_pig",pigImg);
pig.scale=0.2;
  
  
appleG=new Group();
potatoG=new Group();
turnipG=new Group();
bearGroup=new Group();

}
createEdgeSprites()
function draw() {

  if(gameState===PLAY){
  background(0);
  pig.x = World.mouseX;
  
  edges= createEdgeSprites();
  pig.bounceOff(edges);
  

   if(sky.y > height ){
   sky.y = height/2;
   }
  
    createApple();
    createPotato();
    createTurnip();
    createBear();

    if (appleG.isTouching(pig)) {
      appleG.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
    else if (turnipG.isTouching(pig)) {
      turnipG.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }else if(potatoG.isTouching(pig)) {
      potatoG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(bearGroup.isTouching(pig)) {
        gameState=END;
        
        pig.addAnimation("Flying_pig",endImg);
        pig.x=width/2;
        pig.y=height/2;
        pig.scale=0.6;
        
        appleG.destroyEach();
        potatoG.destroyEach();
        turnipG.destroyEach();
        bearGroup.destroyEach();
        
        appleG.setVelocityYEach(0);
        potatoG.setVelocityYEach(0);
        turnipG.setVelocityYEach(0);
        bearGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Calories"+ treasureCollection,width-150,30);
  }

}

function createApple() {
  if (World.frameCount % 200 == 0) {
  var apple = createSprite(Math.round(random(50, width-50),40, 10, 10));
  apple.addImage(appleImg);
  apple.scale=0.12;
  apple.velocityY = 5;
  apple.lifetime = 200;
  appleG.add(apple);
  }
}

function createTurnip() {
  if (World.frameCount % 320 == 0) {
  var turnip = createSprite(Math.round(random(50, width-50),40, 10, 10));
  turnip.addImage(turnipImg);
  turnip.scale=0.03;
  turnip.velocityY = 5;
  turnip.lifetime = 200;
  turnipG.add(turnip);
}
}

function createPotato() {
  if (World.frameCount % 410 == 0) {
  var potato = createSprite(Math.round(random(50, width-50),40, 10, 10));
  potato.addImage(potatoImg);
  potato.scale=0.13;
  potato.velocityY = 5;
  potato.lifetime = 200;
  potatoG.add(potato);
  }
}

function createBear(){
  if (World.frameCount % 530 == 0) {
  var bear = createSprite(Math.round(random(50, width-50),40, 10, 10));
  bear.addImage(bearImg);
  bear.scale=0.1;
  bear.velocityY = 4;
  bear.lifetime = 200;
  bearGroup.add(bear);
  }
}