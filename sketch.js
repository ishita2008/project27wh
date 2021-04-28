
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5
var roof
var rope1,rope2,rope3,rope4,rope5




function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
  world = engine.world;
  
  bobDiameter=40
  bobPositionX=width/2
  bobPositionY=height/4+500

  roof=new Roof(width/2,height/4,width/7,20)
  

	bob1=new Bob(bobPositionX-bobDiameter*2,bobPositionY,bobDiameter)

  
  bob2=new Bob(bobPositionX-bobDiameter,bobPositionY,bobDiameter)

  bob3=new Bob(bobPositionX,bobPositionY,bobDiameter)

  bob4=new Bob(bobPositionX+bobDiameter,bobPositionY,bobDiameter)

  bob5=new Bob(bobPositionX+bobDiameter,bobPositionY,bobDiameter)

  rope1=new rope(bob1.body,roof.body,-bobDiameter*2,0)

  rope2=new rope(bob2.body,roof.body,-bobDiameter*1,0)

  rope3=new rope(bob3.body,roof.body,0,0)
  
  rope4=new rope(bob4.body,roof.body,bobDiameter*1,0)

  rope5=new rope(bob5.body,roof.body,bobDiameter*2,0)

  Engine.run(engine);
 
 
}


function draw() {
 
  rectMode(CENTER);
  
 

  background(230);
  rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

 
  
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
}
}
function drawline(Constraint)
{
	bobBodyPosition=Constraint.bodyA.position
	roofBodyPosition=Constraint.bodyB.position

	roofBodyoffset=Constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}




