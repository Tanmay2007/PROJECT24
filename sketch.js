
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,side1,side2,side3,paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	side1=createSprite(630,640,10,100)
	side2=createSprite(700,680,130,10)
	side3=createSprite(770,640,10,100)
	side1.shapeColor="red"
	side2.shapeColor="red"
	side3.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Matter.Bodies.circle(200,690,5)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground = createSprite(400,690,800,10)
  paperObject=new paper(200,685,4)
 
  
  drawSprites();
 
}

function keyPressed(){
if (keyCode==UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

}

}



