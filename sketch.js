
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObject, stoneObject,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

//var render,Render;
function preload()
{
	boyImage = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;	
	
	stoneObject = new stone(235,420,30);
	mango1 = new mango(1100,100,30);
	mango2 = new mango(1170,130,30);
	mango3 = new mango(1010,140,30);
	mango4 = new mango(1000,70,30);
	mango5 = new mango(1100,230,30);
	mango6 = new mango(1000,230,30);
	mango7 = new mango(900,230,40);
	mango8 = new mango(1140,150,40);
	mango9 = new mango(1100,230,40);
	mango10= new mango(1200,50,40);
	mango11 = new mango(1120,50,40);
	mango12= new mango(900,160,40);
	
	treeObject=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObject.body,{x:235,y:420});

	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
		  width:1300,
		  height:600,
		  wireframes:false
		}
	  });
	Engine.run(engine);

	
function draw() {
  background(230);
  textSize(25);
  text("Press Space to get a second Chance to play!! ",50,50);
  image(boy,200,340,200,300);

  background();
  treeObject.display();
  groundObject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObject.display();

  launcherObject.display();
  detectCollision(stoneObject,mango1);
  detectCollision(stoneObject,mango2);
  detectCollision(stoneObject,mango3);
  detectCollision(stoneObject,mango4);
  detectCollision(stoneObject,mango5);
  detectCollision(stoneObject,mango6);
  detectCollision(stoneObject,mango7);
  detectCollision(stoneObject,mango8);
  detectCollision(stoneObject,mango9);
  detectCollision(stoneObject,mango10);
  detectCollision(stoneObject,mango11);
  detectCollision(stoneObject,mango12);
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcherObject.fly();
}
function keyPressed(){
if(keyCode === 32){
		Matter.Body.setPosition(stoneObject.body,{x:150,y:550})
		launcherObject.attach(stoneObject.body);
	}
	}
	function detectCollision(lstone,lmango){
		
		mangoBodyPosition=lmango.body.position
		stoneBodyPosition=lstone.body.position

		var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		console.log("distance"+distance)
		console.log("r value"+lmango.r+lstone.r)
		if(distance<=lmango.r+lstone.r)
		{
			console.log(distance);
			Matter.Body.setStatic(lmango.body,false);
		}
	}
}