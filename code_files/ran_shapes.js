var maxCircleSize = 900;
var phase = 8,
    speed = 0.02;
var randomColor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}
function draw() {
    var x = 2200;
    var y = 2000;
    phase = (frameCount * speed);
    var sizeOffset = (cos(phase) + 0.3) * 0.2;
    var circleSize = sizeOffset * maxCircleSize;

    fill(random(110, 255), random(0, 255), random(240, 255), 100);
    rect(random(x), random(y), circleSize, circleSize);
    ellipse(random(x), random(y), circleSize, circleSize);
}
