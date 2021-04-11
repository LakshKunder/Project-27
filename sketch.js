const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.

    roof = new Roof()
    bob1 = new Bob(400, 300)
    bob2 = new Bob(350, 300);
    bob3 = new Bob(300, 300);
    bob4 = new Bob(250, 300);
    bob5 = new Bob(200, 300);
    rope1 = new Chain(roof.body, bob1.body, 100);
    rope2 = new Chain(roof.body, bob2.body, 50);
    rope3 = new Chain(roof.body, bob3.body, 0);
    rope4 = new Chain(roof.body, bob4.body, -50);
    rope5 = new Chain(roof.body, bob5.body, -100);
    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(0);

    drawSprites();
    roof.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(bob5.body, bob5.body.position, { x: 20, y: -60 });
    }
}