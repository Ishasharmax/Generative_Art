//var t;
//
//function setup() {
//  createCanvas(800, 800);
//  stroke(0);
//  background('white');
//  noFill();
//  t = 0;
//}
//
//function draw() {
//  var x1 = height * noise(t + 95);
//  var x2 = height * noise(t + 125);
//  var x3 = height * noise(t + 635);
//  var x4 = height * noise(t + 745);
//  var y1 = height * noise(t + 755);
//  var y2 = height * noise(t + 565);
//  var y3 = height * noise(t + 475);
//  var y4 = height * noise(t + 385);
//  var z1 = height * noise(t + 755);
//  var z2 = height * noise(t + 565);
//  var z3 = height * noise(t + 475);
//  var z4 = height * noise(t + 385);
//
//  bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3,x4, y4,z4);
//
//  t += 0.010;
//
//  // clear the background every 500 frames using mod (%) operator
//  if (frameCount % 500 == 0) {
//  background('white');
//  }
//}


var change;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(color(random(225,255), random(115,255), random(200,255)), 3);
  background('grey');
  noFill();
  change = 90;
}

function draw() {
	translate(height/2-400,width/2-900);
  var x1 = height * noise(change );
  var x2 = height * noise(change );
  var x3 = height * noise(change );
  var x4 = height * noise(change );
  var y1 = height * noise(change + 2);
  var y2 = height * noise(change + 3);
  var y3 = height * noise(change + 2);
  var y4 = height * noise(change + 5);
  var z1 = height * noise(change + 6);
  var z2 = height * noise(change + 5);
  var z3 = height * noise(change + 7);
  var z4 = height * noise(change + 4);

  bezier(x1+300, y1+300, z1+300, x2+300, y2+300, z2+300, x3+300, y3+300, z3+300,x4+300, y4+300,z4+300);

  change += 0.010;
	
	if (frameCount % 30 == 0) {
    stroke(color(random(225,255), random(115,255), random(200,255)), 3); 
  }

  // clear the background every 500 frames using mod (%) operator
  if (frameCount % 700 == 0) {
       background('grey');
  }
}