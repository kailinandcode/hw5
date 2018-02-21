
/* adding arrays to the data model, so that there are 100 squares rotating and rising. 
Consider adding additional data to the model: perhaps an xSpeed, judiciously used, will give the smoke some volume?*/
var x = 200;
var y = 20;
var r = 0;

var rectangles = [];
var xPositions = [];
var yPositions = [];
var xSpeed = [];
var ySpeed = [];
var rotations = [];

function setup() {
  createCanvas(400, 400);
	for (i = 0; i < 100; i +=1) {
		yPositions[i] = random(10, height-10);
		xPositions[i] = random(10, width-10);
		rectangles[i] = random(20, 40);
		xSpeed[i] = random(-5, 5);
		ySpeed[i] = random(2, 5);
		rotations[i] = random(0, 5);
	}
}
  
function draw() {
  background(255);
  noStroke();

  // draw smokestack
  fill(255);
	strokeWeight(1);
	stroke(0);
  rect(195, height, 30, -100);

  // save graphics state
  push();
  // darker as it gets closer to 0
  
  // rotate r around (x,y)
  translate(x, y);
  rotate(rotations[random(0, 10)]);
	  
	// reset rotation and translation
  pop();
	
  // draw rectangle
	for (i = 0; i < 100; i++) {
  strokeWeight(xSpeed[i]);
	stroke(rectangles[i], rotations[i], rotations[i]);
	fill(xPositions[i], rectangles[i], yPositions[i]);
  rect(xPositions[i], yPositions[i], rectangles[i], rectangles[i]);

  xPositions[i] = xPositions[i] + xSpeed[i];
  yPositions[i] = yPositions[i] - ySpeed[i];
		
  // rotate 0.05 radians ~= 2.8 degrees per frame
  rotations[i] += 0.5;
	
  // if reach past the top a bunch
  if (xPositions[i] >= height) {
		xPositions[i] = 10;
	}
	if (yPositions[i] >= width) {
		yPositions[i] = 10;
	}
	if (rotations[i] >= 3) {
		rotations[i] = 0.25;
	}
	}
}
