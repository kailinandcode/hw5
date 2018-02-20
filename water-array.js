//water drips from a pipe 

/*adding arrays to the data model, so that there are many independent drops visible at any given time
Consider giving each drop a small, random x and y speed. What range works well for those speeds?*/

var xArr = [];
var yArr = [];

function setup() {
  createCanvas(400, 400);
	for (var index = 0; index < 100; index = index + 1) {
    xArr[index] = random(10, width-10);
    yArr[index] = random(10, height-10);
  }
}
  
function draw() {
	
  background(0);
  noStroke();

  // draw pipe
  
  // draw drip
	for (var index = 0; index < 3; index = index + 1) {
		rect(0, 200, 230, 20);
    ellipse(xArr[index], yArr[index], 10);
    yArr[index] = yArr[index] + 4;

  // down 3 pixels each frame, but maybe should be accelerating?
  // if invisible for a full “height” amount…
  	if (yArr > height*2) {
    // reset
    yArr = 220;
  	}
	}
}
