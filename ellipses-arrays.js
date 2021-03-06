/*modify the code below, adding arrays to the data model, so that there are 50 different circles arrayed around the canvas.
Bonus points for having that pattern be interesting in some way.*/
var xArr = [];
var yArr = [];
var colorArr = [];
var dArr = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	for (var index = 0; index < 50; index = index + 1) {
    xArr[index] = random(10, width-10);
    yArr[index] = random(10, height-10);
		colorArr[index] = random(index, 255);
		dArr[index] = random(10, width/2);
}
}
  
function draw() {
  background(255);
  noStroke();

  // draw fifty ellipses
  for (var i = 0; i < 50; i += 1) {
	stroke(i);
	fill(colorArr[i], colorArr[i], 150);
  	ellipse(xArr[i], yArr[i], dArr[i]);
  
	stroke(i+1);
 	fill(colorArr[i], colorArr[i+1], 150);
  	ellipse(xArr[i], yArr[i], dArr[i+1]);
  
  // 1% of the time
 	 if (random() < 0.01) {
    // random diameter between 10 and 100
   	 dArr[i] = random(10, 100);
 	 }
  
  // 2% of the time…
 	 if (random() < 0.02) {
    // random diameter between 10 and 200
    	dArr[i+1] = random(10, 200);
 	 }
  }
}
