function setup() {
  // Create the canvas
  createCanvas(2520, 1500);
  background('white');
  stroke(0);
  strokeWeight(-4);

  fill(133, 146, 158, 1);

}
var t=9;
function draw() {
  var x=1900;
  var y=1900;

   translate((width/2), (height/2));
  for (let i = 0; i < 1900; i ++) {
    ellipse(t+10, t+10, x+100, y);
    rotate(PI/19);
    t += 2.910;
  }

  if (frameCount % 1000 == 0) {
  background('white');
  }
}


//function setup() {
//  // Create the canvas
//  createCanvas(2520, 1500);
//  background('white');
//  stroke(0);
//
//  fill(255,255,255,1);
//
//}
//var t=9;
//function draw() {
//  var x=6000;
//  var y=1;
//
//  translate((width/2), (height/2));
//  for (let i = 0; i < 190000; i ++) {
//    ellipse(t, t+1000, x, y+9);
//    rotate(-1200/80);
//    t -= 1.011;
//  }
//
//  if (frameCount % 1000 == 0) {
//  background('white');
//  }
//}
