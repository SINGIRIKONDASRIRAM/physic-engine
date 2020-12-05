const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground;
var ball;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic : true
  }
  
  ground = Bodies.rectangle(400,390,800,10,options);
  World.add(world,ground);
  ground.shapeColor = ("green");
  console.log(ground); 
 
  var ball_options = {
    restitution : 1.0
  }
  ball = Bodies.circle(400,10,20,ball_options);
  ball.shapeColor = "white"
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}