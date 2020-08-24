var maxCircleSize = 400;
var maxCircleSize2 = 90;

var phase = 8,
    speed = 0.02;
var randomColor;

function setup() {
    createCanvas(1500, 1200);
    background('whitesmoke');
    noStroke();
}

function draw() {
    var x = 50 + 100;
    var y = 150 + sin(phase) * 1;

    phase = frameCount * speed;
    var sizeOffset = (cos(phase) + 0.1) * 0.4;
    var circleSize = sizeOffset * maxCircleSize;
    var radd = 5;
    randomColor = color(random(255), random(255), random(255));
    for (let i = 0; i < radd; i++) {
        fill(randomColor);
        x = x + 90;
        ellipse(x, y, circleSize, circleSize);
    }
    var radd2 = 3;

    for (let i = 0; i < radd2; i++) {
        fill(randomColor);
        y = y + 90;
        ellipse(x, y, circleSize, circleSize);
    }

    var radd3 = 0;
    for (let i = 5; i > radd3; i--) {
        fill(randomColor);
        x = x - 90;
        ellipse(x, y, circleSize, circleSize);
    }

    var radd4 = 0;
    for (let i = 3; i > radd4; i--) {
        fill(randomColor);
        y = y - 90;
        ellipse(x, y, circleSize, circleSize);
    }
    
    
    var x2 = 750 + 100;
    var y2 = 150 + sin(phase) * 1;

    phase = frameCount * speed;
    var sizeOffset = (cos(phase) + 0.1) * 0.4;
    var circleSize = sizeOffset * maxCircleSize2;
    var radd = 5;
    randomColor = color(random(255), random(255), random(255));
    for (let i = 0; i < radd; i++) {
        fill(randomColor);
        x2 = x2 + 90;
        ellipse(x2, y2, circleSize, circleSize);
    }
    var radd2 = 3;

    for (let i = 0; i < radd2; i++) {
        fill(randomColor);
        y2 = y2 + 90;
        ellipse(x2, y2, circleSize, circleSize);
    }

    var radd3 = 0;
    for (let i = 5; i > radd3; i--) {
        fill(randomColor);
        x2 = x2 - 90;
        ellipse(x2, y2, circleSize, circleSize);
    }

    var radd4 = 0;
    for (let i = 3; i > radd4; i--) {
        fill(randomColor);
        y2 = y2 - 90;
        ellipse(x2, y2, circleSize, circleSize);
    }

}










