var ground,side1,side2,bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1365, 350);
   
	engine = Engine.create();
	world = engine.world;
	paper = new Paper(200,200,40)
  	//side1 = new Ground(900,272,20,134)
	//side2 = new Ground(1100,272,20,134)
	imageMode (TOP)
	bottom = new Dustbin(1000,319,142,67)
	ground = new Ground(width/2,height,1365,30);
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background("pink");
  //Engine.update(engine);
  ground.display();
  paper.display();
  //side1.display();
  //side2.display();	
  bottom.display();
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:76,y:-85})
}
}