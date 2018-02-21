
/* adding arrays to the data model, so that there are 100 squares rotating and rising. 
Consider adding additional data to the model: perhaps an xSpeed, judiciously used, will give the smoke some volume?*/
var x = 210;
var y = 50;
var r = 0;

var rectangles = [];
var positions = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);
	for (i = 0; i < 100; i +=1) {
		rectangles[i] = random(10, 40);
		positions[i] = random(-10, 10);
		xSpeed[i] = random(-5, 5);
		ySpeed[i] = random(-5, 5);
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // save graphics state
  push();
  // darker as it gets closer to 0
  fill(y);
  // rotate r around (x,y)
  translate(x, y);
  rotate(r);
  // draw rectangle
	for (i = 0; i < 100; i++) {
		
  rect(positions[i], positions[i], rectangles[i], rectangles[i]);
	
  // reset rotation and translation
  pop();
  
  positions[i] = 
		
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05;
  
  // if reach past the top a bunch
  if (rectangles[i] < -150) {
    rectangles[i] = 290;
  }
	
	if (rectangles[i] < -150) {
		rectangles[i] = 210;
	}
	}
}
