var fixitrect,movrect;

function setup() {
  createCanvas(1200,800);

  fixitrect= createSprite(200,200,50,80);
fixitrect.shapeColor="green";

  movrect= createSprite(400,200,80,30);
  movrect.shapeColor="green";
  
}

function draw() {
  background(0,0,0);
  movrect.x = World.mouseX;
  movrect.y = World.mouseY;  

if(movrect.x-fixitrect.x< movrect.width/2+fixitrect.width/2 
  && fixitrect.x-movrect.x< movrect.width/2+fixitrect.width/2
  && movrect.y-fixitrect.y< movrect.height/2+fixitrect.height/2 
  && fixitrect.y-movrect.y< movrect.height/2+fixitrect.height/2){
  fixitrect.shapeColor="red";
  movrect.shapeColor="red";
}
else{
  fixitrect.shapeColor="green";
  movrect.shapeColor="green";
}

  drawSprites();
}