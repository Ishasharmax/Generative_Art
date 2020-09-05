var r,y,b,r1,y1,b1,r2,y2,b2;

function setup() {
    // Create the canvas
    createCanvas(800, 400);
    background('white');
    stroke(30);
    strokeWeight(5);
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


    for (let i = 0; i < 6; i++) {
        fill('black');
        rect(random(0, width - 100), random(0, height - 100), random(50, 120), random(50, 120));
    }
    for (let i = 0; i < 5; i++) {
        fill('white');
        rect(random(0, width - 100), random(0, height - 100), random(40, 90), random(40, 90));
    }
    for (let i = 0; i < 3; i++) {
        fill(r, y, b);
        rect(random(0, width - 100), random(0, height - 100), random(120, 180), random(100, 180));
    }
    for (let i = 0; i < 5; i++) {
        fill('white');
        rect(random(0, width - 100), random(0, height - 100), random(40, 90), random(40, 90));
    }

    for (let i = 0; i < 3; i++) {
        fill(r1, y1, b1);
        rect(random(0, width - 100), random(0, height - 100), random(120, 180), random(100, 180));
    }
    for (let i = 0; i < 5; i++) {
        fill('white');
        rect(random(0, width - 100), random(0, height - 100), random(40, 90), random(40, 90));
    }
    for (let i = 0; i < 8; i++) {
        fill(r2, y2, b2);
        rect(random(0, width - 100), random(0, height - 100), random(50, 100), random(50, 100));
    }

    for (let i = 0; i < 5; i++) {
        fill('white');
        rect(random(0, width - 100), random(0, height - 100), random(40, 90), random(40, 90));
    }
    
    noLoop();
}

