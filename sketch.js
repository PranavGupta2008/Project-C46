var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsBottom;
var obsBottomImg1,obsBottomImg2,obsBottomImg3;
var obsTop;
var obsTopImg1,obsTopImg2;
var invisibleGround;
var heart1,heart2,heart3;
var heartImg;

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obsBottomImg1 = loadImage("assets/obsBottom1.png");

obsBottomImg2 = loadImage("assets/obsBottom2.png");

obsBottomImg3 = loadImage("assets/obsBottom3.png");

obsTopImg1 = loadImage("assets/obsTop1.png");

obsTopImg2 = loadImage("assets/obsTop2.png");

heartImg = loadImage("assets/heart.png");
}

function setup(){

createCanvas(1000,500);

//background image
bg = createSprite(600,250,1000,500);
bg.addImage(bgImg);
bg.scale = 1;
bg.velocityX=-3;

//creating top and bottom grounds
bottomGround = createSprite(200,490,1800,20);
bottomGround.shapeColor=rgb(150,75,0);

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,45);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.27;

heart1 = createSprite(960,30,20,20);
heart1.addImage(heartImg);
heart1.scale = 0.08;

heart2 = createSprite(920,30,20,20);
heart2.addImage(heartImg);
heart2.scale = 0.08;

heart3 = createSprite(880,30,20,20);
heart3.addImage(heartImg);
heart3.scale = 0.08;
}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 1;
              
          // console.log(bg.x);

           if(bg.x<400){
             bg.x = bg.width/2;
             
           }

           // making the balloon collide with bottom ground
           balloon.collide(bottomGround);
           
           if(keyDown("DOWN_ARROW")){
             balloon.y = balloon.y+5;
           }
        
        spawnTopObs();   
        spawnBottomObs();
        drawSprites();
        
}
  function spawnBottomObs(){
    if(frameCount%185 === 0){
    obsBottom = createSprite(950,365);
    obsBottom.velocityX = -2;
    obsBottom.lifetime = 500;
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:obsBottom.addImage(obsBottomImg1);
      obsBottom.scale = 0.13;
      break;

      case 2:obsBottom.addImage(obsBottomImg2);
      obsBottom.scale = 0.13;
      break;

      case 3:obsBottom.addImage(obsBottomImg3);
      obsBottom.scale = 0.12;
      
      break;
      default:break;
    }
  obsBottom.depth=balloon.depth; 
  balloon.depth+=1;

    }  
  }

function spawnTopObs(){
if (frameCount%195 === 0){
obsTop = createSprite(950,50);
obsTop.velocityX = -2;
obsTop.lifetime = 500;
obsTop.y = Math.round(random(20,80));
var rand = Math.round(random(1,2))
switch(rand){
  case 1:obsTop.addImage(obsTopImg1);
  obsTop.scale = 0.13;
  break;

  case 2:obsTop.addImage(obsTopImg2);
  obsTop.scale = 0.28;
  break;
  default:break;
}

}
   }



