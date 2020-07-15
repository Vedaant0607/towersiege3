var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,ground;
var polygon, slingShot;
var score = 0;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	platform = new Ground(400,300,300,20);
	//level 1
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(410,275,30,40);
	box6 = new Box(440,275,30,40);
	box7 = new Box(470,275,30,40);
	//level 2
    box8 = new Box(325,235,30,40);
    box9 = new Box(355,235,30,40);
	box10 = new Box(385,235,30,40);
	box11 = new Box(415,235,30,40);
	box12 = new Box(445,235,30,40);
	//level 3
    box13 = new Box(355,195,30,40);
    box14 = new Box(385,195,30,40);
	box15 = new Box(415,195,30,40);
	//level 4
	box16 = new Box(385,155,30,40);
    
    
    polygon = new Paper(100,200,20);
    
    slingShot = new SlingShot(polygon.body,{x:100 , y:200});
 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  ground.display();
  platform.display();
  polygon.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX , y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32 && polygon.body.speed < 3){
        console.log(polygon.body.speed)
        polygon.trajectory = [];
       slingShot.attach(polygon.body);
       Matter.Body.setPosition(polygon.body, {x: 100 , y: 200});
    }
}
