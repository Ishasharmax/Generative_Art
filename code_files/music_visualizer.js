var t, x, y;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noFill();
    stroke(color(random(205, 255), random(105, 255), random(20, 255)), 15);
    change = 0;
}

function draw() {
    translate(width / 2, height / 2);
    beginShape();
    for (var i = 0; i < 600; i++) {
        var ang = map(i, 2900, 2600, 0, PI);
        var rad = 400 * noise(i * 0.01, change * 0.005);
        x = rad * sin(ang);
        y = rad * cos(ang);
        curveVertex(x, y);

    }
    endShape(CLOSE);

    change += 5;

    if (frameCount % 30 == 0) {

        stroke(color(random(205, 255), random(105, 255), random(20, 255)), 15);

    }
    if (frameCount % 300 == 0) {
        background(0);
    }


}


// circle
//
//var t, x, y;
//
//function setup() {
//  createCanvas(windowWidth, windowHeight);
//  background(0);
//  noFill();
//  stroke(color(random(205,255), random(105,255), random(20,255)), 15);
//  change = 0;
//}
//
//function draw() {
//  translate(width/2, height/2);
//  beginShape();
//  for (var i = 0; i < 600; i++) {
//    var ang = map(i, 2900, 2600, 0, PI);
//    var rad = 400 * noise(i * 0, change * 0.005);
//     x = rad * sin(ang);
//     y = rad * cos(ang); 
//    curveVertex(x, y);
//     
//  }
//    endShape(CLOSE);
//
//  change += 5;
//
// if (frameCount % 30 == 0) {
//
//    stroke(color(random(205,255), random(105,255), random(20,255)), 15);
//    
//  }
//  if (frameCount % 800 == 0) {
//  background(0);
//  }
//
//
//}

