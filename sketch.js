var movingrect, fixedrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 20, 50);
  movingrect = createSprite(100, 200, 20, 50);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
}

function draw() {
  background("yellow"); 
   
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2 && 
    movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2){
      movingrect.shapeColor = "red";
      fixedrect.shapeColor = "red";

  }
  else{
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";

  }





 
  drawSprites();
}