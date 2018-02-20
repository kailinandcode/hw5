
/* adding arrays to the data model, so that there are 100 squares rotating and rising. 
Consider adding additional data to the model: perhaps an xSpeed, judiciously used, will give the smoke some volume?*/

var x = 210;
var y = 290;
var r = 0;

function setup() {
  createCanvas(400, 400);
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
  rect(-10, -10, 20, 20);
  // reset rotation and translation
  pop();
  
  // up 3 pixels
  y -= 3;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
  
  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
  }
}
