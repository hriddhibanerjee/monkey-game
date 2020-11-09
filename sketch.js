
var monkey , monkey_running , ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
   createCanvas(600, 600);
  
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale = 0.1;
  
  //creating ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
  
  score = 0;
  
  

  
}


function draw() {
  
  background("lightblue");
  
  
  //jump when the space key is pressed
    if(keyDown("space")) {
      
      monkey.velocityY = -12;
        
    }
  
  //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  //if ostacles touch monkey
  if(monkey.isTouching(obstaclesGroup)){
     ground.velocityX = 0;
     monkey.velocityX = 0;
    
     obstaclesGroup.setVelocityXEach(0);
     foodGroup.setVelocityXEach(0);
    
    obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
      
  }
  
  
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime , 100,50);
  
  drawSprites();
  FoodGroup();
  obstacleGroup();
 
}


function FoodGroup() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    bananaGroup.add(banana)
    
  }
  
}


function obstacleGroup() {
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(810,320,10,40);
  
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    
    obstaclesGroup.add(obstacle);
    
  }
  
}



