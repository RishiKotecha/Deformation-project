var car, wall, invisiblewall;
var speed, weight, deform;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  invisiblewall = createSprite(775,200,60,height/2);
  invisiblewall.visible = false
  wall = createSprite(780,200,60,height/2);
  wall.shapeColor ="black";
 

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed
  car.collide(wall)
  car.collide(invisiblewall)
  deform = 0.5*weight*speed*speed/22500
  console.log(deform)

  if(deform<100){
     car.shapeColor= "green"
  }

  if(deform>100 && deform<180){
    car.shapeColor="yellow"
   }  

   if(deform>180){
    car.shapeColor="red"
   }

  drawSprites();
}