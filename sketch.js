const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    //ground and stands
    ground = new Ground(750, 585, 1500, 30);
    stand1 = new Ground(800, 430, 300, 15);
    stand2 = new Ground(1250, 260, 220, 15);

    //level one
    block1 = new Block(695, 400, 35, 45);
    block2 = new Block(731, 400, 35, 45);
    block3 = new Block(767, 400, 35, 45);
    block4 = new Block(801, 400, 35, 45);
    block5 = new Block(837, 400, 35, 45);
    block6 = new Block(873, 400, 35, 45);
    block7 = new Block(899, 400, 35, 45);
    
    //level two
    block8 = new Block(731, 365, 35, 45);
    block9 = new Block(767, 365, 35, 45);
    block10 = new Block(801, 365, 35, 45);
    block11 = new Block(837, 365, 35, 45);
    block12 = new Block(873, 365, 35, 45);

    //level three
    block13 = new Block(767, 330, 35, 45);
    block14 = new Block(801, 330, 35, 45);
    block15 = new Block(837, 330, 35, 45);

    //level four
    block16 = new Block(801, 295, 35, 45);

    //lowest level
    block17 = new Block(1180, 230, 35, 45);
    block18 = new Block(1216, 230, 35, 45);
    block19 = new Block(1252, 230, 35, 45);
    block20 = new Block(1288, 230, 35, 45);
    block21 = new Block(1324, 230, 35, 45);

    //middle level
    block22 = new Block(1216, 195, 35, 45);
    block23 = new Block(1252, 195, 35, 45);
    block24 = new Block(1288, 195, 35, 45);
    
    //top level
    block25 = new Block(1252, 160, 35, 45);

    //creating the polygon
    polygon = new Polygon();

    slingshot = new SlingShot(polygon.body, {x: 270, y: 340});

    Engine.run(engine);
}


function draw(){
    background(40, 24, 20);
    Engine.update(engine);

    textSize(30);
    fill(255);
    text("drag the polygon and release it, to launch it towards the blocks!", 320, 50);
    textSize(25);
    text("press space to get a second chance to play!", 490, 90);

    ground.display();
    stand1.display();
    stand2.display();

    fill("lightblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("lightpink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("lightgreen");
    block13.display();
    block14.display();
    block15.display();

    fill("violet");
    block16.display();

    fill("lightblue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill("lightpink");
    block22.display();
    block23.display();
    block24.display();

    fill("violet");
    block25.display();

    polygon.display();
    slingshot.display();
}

function mouseReleased(){
    slingshot.fly();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x: 270, y: 340});
        slingshot.attach(polygon.body);
    }
}