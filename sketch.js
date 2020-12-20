var fixedRet,movingRet;



function setup() {
  createCanvas(800,400);
 fixedRet= createSprite(200, 200, 50, 80);
 fixedRet.shapeColor="green";
 movingRet=createSprite(400,200,80,30);
 movingRet.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRet.x=World.mouseX;
  movingRet.y=World.mouseY;
  if(movingRet.x-fixedRet.x<fixedRet.width/2+movingRet.width/2&&fixedRet.x-movingRet.x<fixedRet.width/2+movingRet.width/2
    &&movingRet.y-fixedRet.y<fixedRet.height/2+movingRet.height/2&&fixedRet.y-movingRet.y<fixedRet.height/2+movingRet.height/2){
    movingRet.shapeColor="red";
    fixedRet.shapeColor="red";
  }
  else{
    movingRet.shapeColor="green";
    fixedRet.shapeColor="green";
  }
  drawSprites();
}