var boxside1, boxside2, boxbottom
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
	
}

function setup() {
	createCanvas(800, 800);

	groundSprite = createSprite(400,800,width,10)
	groundSprite . shapeColor = color("yellow")

    boxside1 = createSprite(500,720,20,100)
	boxside1 . shapeColor = color("white")
	
	boxside2 = createSprite(300,720,20,100)
	boxside2 . shapeColor = color("white")

	boxbottom = createSprite(400,770,200,20)
	boxbottom . shapeColor = color("white")

	engine = Engine.create();
	world = engine.world;

	 boxbottom = Bodies.rectangle(400, 770, 200, 20 , {isStatic:true} );
	 World.add(world, boxbottom);
	 
	 boxside1 = Bodies.rectangle(500, 720, 20, 100 , {isStatic:true} );
	 World.add(world, boxside1);
	 
	 boxside2 = Bodies.rectangle(300, 720, 20, 100 , {isStatic:true} );
     World.add(world, boxside2);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);

  drawSprites();
 keypress();
}

function keypress(){
    if (keyCode == UP_ARROW) {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}


}

