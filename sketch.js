
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObject, paperObject;
var world, groundObject;


function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Creating the Paper
	paperObject = new paper(200,450,70);

	//Creating the Dustbin
	dustbinObject = new dustbin(1200,650);

	//Creating the Ground
	groundObject = new ground(width/2, 670, width, 20);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600,
			height: 700,
			wireframes: false,
		}
	});


	Engine.run(engine);
	Render.run(render);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //Displaying the Objects
  dustbinObject.display();
  paperObject.display();
  groundObject.diaplay();
 
}


function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130, y:-145});
		
	}
}





