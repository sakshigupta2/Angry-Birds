const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(230,100,50,50);
    ground1 = new Ground(200,380,400,50);
}

function draw(){
    background("blue");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
}