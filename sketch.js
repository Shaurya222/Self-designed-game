var superhero,monster1,monster2,background1,backgroundmove,monstergrp,score;
function setup(){
createCanvas(displayWidth,displayHeight);
backgroundmove=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
superhero = createSprite(displayWidth-200,displayHeight-300,50,50);
superhero.shapeColor="blue"
superhero.addImage(superheroimg1);
monstergrp = new Group()

backgroundmove.addImage(background1)
backgroundmove.scale=3;
superhero.setCollider("rectangle",0,0,200,60)
score=0;
}
function draw(){
background("Blue");

if(frameCount%100===0){
  var rand=Math.round(random(1,3));
  if (rand===1) {
    monster1 = createSprite(displayHeight/2-100, random(22,24),50,50);
monster1.shapeColor="purple"
  }
  if(rand===2){
    monster2 = createSprite(displayHeight-123,displayWidth-250,50,50);
  }
}
if(keyWentDown("left")){
superhero.x=superhero.x-25;
}
backgroundmove.velocityX=5
if(keyWentDown("right")){
  superhero.x=superhero.x+25;
}
if(keyWentDown("Up")){
  superhero.y=superhero.y-25;
}
if(keyWentDown("Down")){
  superhero.y=superhero.y+25;
}

if(backgroundmove.x>displayWidth){
  backgroundmove.x=backgroundmove.width/2;
}
if(superhero.isTouching(monstergrp)){
  monstergrp.destroyEach()
  score=score+1;
}
superhero.debug=true;
SpawnMonsters();
drawSprites();
text("score "+score,displayWidth/2-100,50)

}
function preload(){
superheroimg= loadImage("images/www.jpg");
superheroimg1=loadImage("images/Untitled.png");
monster12=loadImage("images/monster1.png")
monster22=loadImage("images/w.png")
background1=loadImage("images/maxresdefault.jpg")
}
function SpawnMonsters(){
if(frameCount%60===0){
  
    var obstacle = createSprite(0,random(50,displayHeight-100),10,40);
    obstacle.velocityX = 6
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(monster12);
               break;
       case 2: obstacle.addImage(monster22);

       default: break;
     }
     obstacle.debug=true;
     obstacle.scale=0.5;
     monstergrp.add(obstacle);
}      
}













