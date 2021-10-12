var boy,boy_running;
var tree;
var apple1,apple2,apple3;
var orange1,orange2,orange3;

var score = 0;

function preload(){
  cityImage = loadImage("jungle.jpg")
  boy_running = loadAnimation("boy.jpg")
  treeImage = loadImage("images/tree.png")
  apple1Image = loadImage("apple2.png")
  orange1Image = loadImage("orange2.png")
  stoneImage = loadImage("images/stone.png")
  basketImage = loadImage("basket2.png")
  jumpSound = loadSound("jump.wav")
  collidedSound = loadSound("collided.wav")
  
   
}

function setup(){
  createCanvas(1200,600)

  city = createSprite(630,280,20,10)
  city.addImage(cityImage)
  city.scale = 1.25;

 
  boy = createSprite(100,450,20,10)
  boy.addAnimation("running", boy_running)

  tree = createSprite(900,270,20,10)
  tree.addImage(treeImage)
  tree.scale = 0.5;

  apple1 = createSprite(810,130,20,10)
  apple1.addImage(apple1Image)
  
  apple2 = createSprite(950,80,20,10)
  apple2.addImage(apple1Image)

  apple3 = createSprite(1050,160,20,10)
  apple3.addImage(apple1Image)

  orange1 = createSprite(730,180,20,10)
  orange1.addImage(orange1Image)

  orange2 = createSprite(900,150,20,10)
  orange2.addImage(orange1Image)

  orange3 = createSprite(850,50,20,10)
  orange3.addImage(orange1Image)

  stone = createSprite(300,400,20,10)
  stone.addImage(stoneImage)
  stone.scale = 0.1;
  stone.visible = false;

  stone1 = createSprite(300,400,20,10)
  stone1.addImage(stoneImage)
  stone1.scale = 0.1;
  stone1.visible = false;

  stone2 = createSprite(300,400,20,10)
  stone2.addImage(stoneImage)
  stone2.scale = 0.1;
  stone2.visible = false;

  stone3 = createSprite(300,400,20,10)
  stone3.addImage(stoneImage)
  stone3.scale = 0.1;
  stone3.visible = false;

  stone4 = createSprite(300,400,20,10)
  stone4.addImage(stoneImage)
  stone4.scale = 0.1;
  stone4.visible = false;

  stone5 = createSprite(300,400,20,10)
  stone5.addImage(stoneImage)
  stone5.scale = 0.1;
  stone5.visible = false;

  basket = createSprite(900,560,20,10)
  basket.addImage(basketImage)
 
 
}
function draw(){
  background(255)
  
  if(keyIsDown(RIGHT_ARROW)){
    boy.velocityX = 3;
}
if(keyIsDown(LEFT_ARROW)){
  boy.velocityX = -3;
}
if(keyIsDown(UP_ARROW)){
  basket.velocityX = 3;
}
if(keyIsDown(DOWN_ARROW)){
basket.velocityX = -3;
}
if(keyDown("space")){
  boy.velocityX = 0;
  basket.velocityX = 0;
}
if(keyDown("enter")){
  stone.visible = true;
 
  stone.velocityX = 2;
  stone.velocityY = -2;
  
}
if(keyDown("shift")){
  stone.visible = true;
 
  stone.velocityX = 2;
  stone.velocityY = 2;
  
}
if(keyDown("ctrl")){
 
  stone1.visible = true;
  
  stone1.velocityX = 3;
  stone1.velocityY = -3;

}
if(keyDown("alt")){
 
  stone1.visible = true;
  
  stone1.velocityX = 3;
  stone1.velocityY = 3;
}
if(keyDown("delete")){
  stone2.visible = true;
 
  stone2.velocityX = 4;
  stone2.velocityY = 4;
  
}
if(keyDown("backspace")){
 
  stone2.visible = true;
  
  stone2.velocityX = 4;
  stone2.velocityY = -4;

  

}
if(keyDown("a")){
  stone3.visible = true;
 
  stone3.velocityX = 4;
  stone3.velocityY = 4;
  
}
if(keyDown("s")){
 
  stone3.visible = true;
  
  stone3.velocityX = 4;
  stone3.velocityY = -4;

  }
  if(keyDown("j")){
    stone4.visible = true;
   
    stone4.velocityX = 4;
    stone4.velocityY = 4;
    
  }
  if(keyDown("k")){
   
    stone4.visible = true;
    
    stone4.velocityX = 4;
    stone4.velocityY = -4;
  
    
  
  }
  if(keyDown("b")){
    stone5.visible = true;
   
    stone5.velocityX = 4;
    stone5.velocityY = 4;
    
  }
  if(keyDown("c")){
   
    stone5.visible = true;
    
    stone5.velocityX = 4;
    stone5.velocityY = -4;
  }
if(stone.isTouching(orange1)){
  stone.visible = false;
   orange1.velocityY = 4; 
   score = score + 1;
   jumpSound.play();
 
  
}
if(stone1.isTouching(apple1)){
  stone1.visible = false;
   apple1.velocityY = 4;
   score = score + 1;
   jumpSound.play(); 
  }
  if(stone2.isTouching(orange3)){
    stone2.visible = false;
     orange3.velocityY = 4; 
     score = score + 1;
     jumpSound.play();
    }
    if(stone3.isTouching(apple2)){
      stone3.visible = false;
       apple2.velocityY = 4; 
       score = score + 1;
       jumpSound.play();
      }
      if(stone4.isTouching(orange2)){
        stone4.visible = false;
         orange2.velocityY = 4; 
         score = score + 1;
         jumpSound.play();
        }
    
        if(stone5.isTouching(apple3)){
          stone5.visible = false;
           apple3.velocityY = 4; 
           score = score + 1;
           jumpSound.play();
          }
          

  drawSprites();
  textSize(20);
  stroke(3);
  fill("yellow")
  text("Score: "+ score, 10,50);
  
  if(basket.isTouching(apple3)){
    boy.visible = false;
    tree.visible = false;
    basket.visible = false;
    apple3.visible = false;
    collidedSound.play();
    textSize(30);
    stroke(3);
    fill("orange");
    text("Congragulations!! You win the game!! ", 70,200);
  }
}