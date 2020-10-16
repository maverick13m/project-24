var boxside1, boxside2, boxbottom
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload(){
	
}

function setup() {
  engine =Engine.create()
  world = engine.world
	createCanvas(800, 800);
	ground = new Ground(400,620,width,20)
  paperObject = new paper(100,90,50)
  dustbin = new Dustbin(600,600)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  ground.display();
  paperObject.display();
  dustbin.display();
}

function keyPressed(){
    if (keyCode == UP_ARROW) {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-185});
	}
}

