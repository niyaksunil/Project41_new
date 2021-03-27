// constant variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// created the variables
var objUmbrella,umbrellaImg ;
var lightning, lightningImg1, lightningImg2, lightningImg3, lightningImg4 ;
var maxDrops = 50;
var arrayDroplets =[];

// created the preload function
function preload(){
	lightningImg1 = loadImage("images/3.png");
	lightningImg2 = loadImage("images/3.png");
	lightningImg3 = loadImage("images/3.png");
	lightningImg4 = loadImage("images/3.png");
}

function setup(){
    createCanvas(550, 600);

    engine = Engine.create();
	world = engine.world;

// created the umbrellla object
	objUmbrella = new Umbrella(275,445,110,254,276);

	Engine.run(engine);
    
}

function draw(){
	background("black");

// created the arrayDroplets using frameCount
	if(frameCount%1===0){
		arrayDroplets.push(new Drops(random(10,589), random(8,20),2));
	}

// created the arrayDroplets using for loop
	for(var j = 0; j<arrayDroplets.length; j++){
		arrayDroplets[j].display();
	}

// created the lightning using the switch case
	if (frameCount % 40 === 0) {
		lightning = createSprite(random(100, 456), 100, 0.5, 0.5);
		var rand = Math.round(random(1,4));
		switch(rand){
			case 1: lightning.addImage("lightning1",lightningImg1);
			break;
			case 2: lightning.addImage("lightning2", lightningImg2);
			break;
			case 3: lightning.addImage("lightning3", lightningImg3);
			break;
			case 4: lightning.addImage("lightning4", lightningImg4);
			break;
		}

// adding lifetime and scale for lightning
		lightning.lifetime = 10;
		lightning.scale = 0.4;
	}


	
	objUmbrella.display();

    drawSprites();
}   
