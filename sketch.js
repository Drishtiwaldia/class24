const Engine=Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;
var engine , world

var obj

function setup() {
  createCanvas(800,400);
  engine=Engine. create();
world= engine . world;
obj=Bodies.rectangle(200,200,60,60);
World.add(world,obj);
}

function draw() {
  background(0);  
 Engine.update(engine);
 rectMode(CENTER);
rect(obj.position.x,obj.position.y,60,60);
}