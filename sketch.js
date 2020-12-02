function setup() {
  createCanvas(800,400);
 fixed = createSprite(400, 200, 50, 50);
 moving = createSprite(600, 200, 30, 70);
square=createSprite(20,40,15,15)
rectangle=createSprite(400,40,80,40)
square.velocityX=5
}

function draw() {
  edges=createEdgeSprites()
  background("yellow");  
  moving.x=mouseX
  moving.y=mouseY
  if(istouching(fixed,moving)){
    fixed.shapeColor="blue"
    moving.shapeColor="blue"

  }else{
    fixed.shapeColor="green"
    moving.shapeColor="green"
  }

  if(istouching(square,rectangle)){
    background("cyan")
  }else{
    background("yellow")
  }
square.bounceOff(edges)
  drawSprites();
}

