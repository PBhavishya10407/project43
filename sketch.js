var hr,mi,se;
var hrAngle,miAngle;
var scAngle;

function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES);

}

function draw() {
  background(0); 
 
  translate(200,200);
  rotate(-90);
  noFill();
  stroke("red");
  strokeWeight(4);
  arc(0,0,360,360,0,scAngle); 
  stroke("blue");
  strokeWeight(4);
  arc(0,0,340,340,0,hrAngle); 
  stroke("green");
  strokeWeight(4);
  arc(0,0,320,320,0,miAngle);

  hr=hour();
  mi=minute();
  se=second();
  
  scAngle=map(se,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);
  miAngle=map(mi,0,60,0,360);
  
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(4);
  noFill();
  line(0,0,100,0);
  pop();

  push();
  rotate(-360);
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(4);
  noFill();
  line(0,0,25,0);
  pop();

  push();
  rotate(-360);
  rotate(miAngle);
  stroke("green");
  strokeWeight(4);
  noFill();
  line(0,0,50,0);
  pop();

  

  drawSprites();
}