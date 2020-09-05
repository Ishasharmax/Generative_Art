var r;
var y;
var b;
var r1;
var y1;
var b1;
var r2;
var y2;
var b2;

function setup() {
    // Create the canvas
    createCanvas(700, 700);
    background(230, 220, 190);
    stroke(30);
    strokeWeight(1);
}

function draw() {
    r = 255; // r is a random number between 0 - 255
    y = 0; // g is a random number betwen 100 - 200
    b = 0; // b is a random number between 0 - 100

    r1 = 0; // r is a random number between 0 - 255
    y1 = 150; // g is a random number betwen 100 - 200
    b1 = 255; // b is a random number between 0 - 100


    r2 = 255; // r is a random number between 0 - 255
    y2 = 255; // g is a random number betwen 100 - 200
    b2 = 0; // b is a random number between 0 - 100

    cir1X = width / 2;
    cir1Y = height / 2;

    cir1 = 600;

    push();
    stroke(30);
    strokeWeight(20);
    noFill();
    ellipse(width / 2, height / 2, cir1, cir1);
    pop();

    push();
    stroke(0);
    strokeWeight(2);
    for (let i = 0; i < 7; i++) {
        fill(0, 0, 0, 20);
        line(random(cir1X - cir1 / 3, cir1X + cir1 / 3), random(cir1Y - 200, cir1Y + 200), random(150, 490), random(150, 490));
    }
    pop();
    push();
    stroke(0);
    strokeWeight(5);
    for (let i = 0; i < 2; i++) {
        fill(255, 255, 255, 80);
        ellipse(random(cir1X - cir1 / 4, cir1X + cir1 / 4), random(cir1Y - cir1 / 3, cir1Y + cir1 / 3), 20, 20);
    }
    pop();
    push();
    stroke(0);
    strokeWeight(5);
    for (let i = 0; i < 1; i++) {
        fill(r, y, b, 80);
        ellipse(random(cir1X - cir1 / 4, cir1X + cir1 / 4), random(cir1Y - cir1 / 3, cir1Y + cir1 / 3), 50, 50);
    }
    pop();

    for (let i = 0; i < 2; i++) {
        fill(r, y, b, 80);
        ellipse(random(cir1X - cir1 / 4, cir1X + cir1 / 4), random(cir1Y - cir1 / 3, cir1Y + cir1 / 3), 120, 120);
    }
    push();
    stroke(0);
    strokeWeight(1);
    for (let i = 0; i < 7; i++) {
        fill(0, 0, 0, 20);
        line(random(cir1X - cir1 / 3, cir1X + cir1 / 3), random(cir1Y - 200, cir1Y + 200), random(150, 490), random(150, 490));
    }
    pop();
    for (let i = 0; i < 2; i++) {
        fill(r1, y1, b1, 80);
        ellipse(random(cir1X - cir1 / 4, cir1X + cir1 / 4), random(cir1Y - cir1 / 3, cir1Y + cir1 / 3), 40, 40);
    }
    for (let i = 0; i < 2; i++) {
        fill(r2, y2, b2, 80);
        ellipse(random(cir1X - cir1 / 4, cir1X + cir1 / 4), random(cir1Y - cir1 / 3, cir1Y + cir1 / 3), 100, 100);
    }
    for (let i = 0; i < 1; i++) {
        fill(65, 82, 55, 90);
        ellipse(random(cir1X - cir1 / 4, cir1X + cir1 / 4), random(cir1Y - cir1 / 3, cir1Y + cir1 / 3), 170, 170);
    }
    push();
    stroke(0);
    strokeWeight(3);
    for (let i = 0; i < 2; i++) {
        fill(31, 71, 128, 80);
        ellipse(random(cir1X - cir1 / 4, cir1X + cir1 / 4), random(cir1Y - cir1 / 3, cir1Y + cir1 / 3), 30, 30);
    }
    pop();

    noLoop();
}
