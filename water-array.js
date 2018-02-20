//water drips from a pipe 

/*adding arrays to the data model, so that there are many independent drops visible at any given time
Consider giving each drop a small, random x and y speed. What range works well for those speeds?*/

var x = 230;
var y = 220;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
  
  // draw drip
  ellipse(x, y, 10);
  
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 3
  
  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
  }
}
