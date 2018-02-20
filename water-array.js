//water drips from a pipe 

/*adding arrays to the data model, so that there are many independent drops visible at any given time
Consider giving each drop a small, random x and y speed. What range works well for those speeds?*/

var x = [];
var y = [];

function setup() {
  createCanvas(400, 400);
	for (var index = 0; index < 200; index = index + 1) {
    x[index] = random(10, width-10);
    y[index] = random(10, height-10);
  }
}
  
function draw() {
	
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);
	
  // draw drip
  for (var index = 0; index < 100; index = index + 1) {
    		ellipse(x[index], y[index], 10);
		if (y[index] > height*2) {
   		 // reset
   		 y[index] = 220;
  		}
    y[index] = y[index+1] * (1 + y[index])/y[index];
    x[index] = x[index+1] * (1 + x[index])/x[index];
  }
}
