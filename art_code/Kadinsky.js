var r,y,b,r1;

function setup() {
    // Create the canvas
    createCanvas(460, 460);
    background(247, 247, 228);
    noStroke();

    r = 252; // r is a random number between 0 - 255
    g = 96; // g is a random number betwen 100 - 200
    b = 78; // b is a random number between 0 - 100

    r1 = 0; // r is a random number between 0 - 255
    g1 = 150; // g is a random number betwen 100 - 200
    b1 = 255; // b is a random number between 0 - 100


    r2 = 15; // r is a random number between 0 - 255
    g2 = 66; // g is a random number betwen 100 - 200
    b2 = 138; // b is a random number between 0 - 100


    var cir1X = random(70, 90);
    var cir1Y = random(60, 90);
    var firX = random(60, 70);
    var firY = random(60, 70);

    var cir2X = random(220, 240);
    var cir2Y = random(60, 90);
    var secX = random(110, 120);
    var secY = random(60, 70);

    var cir3X = random(360, 380);
    var cir3Y = random(60, 90);
    var thiX = random(180, 190);
    var thiY = random(60, 70);

    var cir4X = random(70, 90);
    var cir4Y = random(220, 240);
    var fouX = random(60, 70);
    var fouY = random(200, 230);

    var cir5X = random(220, 240);
    var cir5Y = random(220, 240);
    var fivX = random(110, 120);
    var fivY = random(200, 230);

    var cir6X = random(360, 380);
    var cir6Y = random(220, 240);
    var sixX = random(180, 190);
    var sixY = random(200, 230);

    var cir7X = random(70, 90);
    var cir7Y = random(360, 380);
    var sevX = random(60, 70);
    var sevY = random(350, 380);

    var cir8X = random(220, 240);
    var cir8Y = random(360, 380);
    var eighX = random(110, 120);
    var eighY = random(350, 380);

    var cir9X = random(360, 380);
    var cir9Y = random(360, 380);
    var ninX = random(180, 190);
    var ninY = random(350, 380);

    for (let i = 0; i < 5; i++) {
        fill(r2, g2, b2, 90);
        rect(firX - 60, firY - 60, 150, 150);
        fill(255, 255, 0, 90);
        ellipse(cir1X, cir1Y, 110, 110);
        fill(255, 0, 0, 90);
        ellipse(cir1X, cir1Y, 80, 80);
        fill(158, 6, 158, 90);
        ellipse(cir1X, cir1Y, 50, 50);
        fill(255, 0, 0, 90);
        ellipse(cir1X, cir1Y, 20, 20);
    }
    for (let i = 0; i < 5; i++) {
        fill(159, 219, 46, 90);
        rect(secX + 40, secY - 60, 150, 150);
        fill(r, g, b, 90);
        ellipse(cir2X, cir2Y, 110, 110);
        fill(r1, g1, b1, 90);
        ellipse(cir2X, cir2Y, 80, 80);
        fill(225, 225, 225, 90);
        ellipse(cir2X, cir2Y, 50, 50);
        fill(255, 0, 0, 90);
        ellipse(cir2X, cir2Y, 20, 20);
        fill(238, 250, 226, 90);
        ellipse(cir2X, cir2Y, 10, 10);
    }
    for (let i = 0; i < 5; i++) {
        fill(128, 3, 128, 90);
        rect(thiX + 120, thiY - 60, 150, 150);
        fill(255, 255, 255, 90);
        ellipse(cir3X, cir3Y, 110, 110);
        fill(63, 84, 140, 90);
        ellipse(cir3X, cir3Y, 80, 80);
        fill(225, 225, 225, 90);
        ellipse(cir3X, cir3Y, 50, 50);
        fill(255, 0, 0, 90);
        ellipse(cir3X, cir3Y, 20, 20);
    }

    for (let i = 0; i < 5; i++) {
        fill(110, 2, 18, 90);
        rect(fouX - 60, fouY - 60, 150, 150);
        fill(255, 255, 0, 90);
        ellipse(cir4X, cir4Y, 110, 110);
        fill(41, 138, 83, 90);
        ellipse(cir4X, cir4Y, 80, 80);
        fill(225, 225, 225, 90);
        ellipse(cir4X, cir4Y, 50, 50);
        fill(138, 70, 70, 90);
        ellipse(cir4X, cir4Y, 20, 20);
    }
    for (let i = 0; i < 5; i++) {
        fill(0, 161, 56, 90);
        rect(fivX + 40, fivY - 60, 150, 150);
        fill(219, 227, 204, 90);
        ellipse(cir5X, cir5Y, 110, 110);
        fill(255, 0, 0, 90);
        ellipse(cir5X, cir5Y, 80, 80);
        fill(225, 225, 225, 90);
        ellipse(cir5X, cir5Y, 50, 50);
        fill(138, 70, 126, 90);
        ellipse(cir5X, cir5Y, 20, 20);
    }
    for (let i = 0; i < 5; i++) {
        fill(194, 204, 4, 90);
        rect(sixX + 120, sixY - 60, 150, 150);
        fill(255, 255, 255, 90);
        ellipse(cir6X, cir6Y, 110, 110);
        fill(21, 47, 23, 90);
        ellipse(cir6X, cir6Y, 60, 60);
        fill(4, 57, 204, 90);
        ellipse(cir6X, cir6Y, 50, 50);
        fill(90, 70, 138, 90);
        ellipse(cir6X, cir6Y, 20, 20);
    }
    for (let i = 0; i < 5; i++) {
        fill(204, 144, 4, 90);
        rect(sevX - 60, sevY - 60, 150, 150);
        fill(255, 255, 0, 90);
        ellipse(cir7X, cir7Y, 110, 110);
        fill(225, 225, 225, 90);
        ellipse(cir7X, cir7Y, 50, 50);
        fill(255, 0, 0, 90);
        ellipse(cir7X, cir7Y, 20, 20);
        fill(138, 70, 70, 90);
        ellipse(cir4X, cir4Y, 10, 10);
    }
    for (let i = 0; i < 5; i++) {
        fill(40, 70, 101, 90);
        rect(eighX + 40, eighY - 60, 150, 150);
        fill(255, 255, 255, 90);
        ellipse(cir8X, cir8Y, 100, 100);
        fill(21, 47, 23, 90);
        ellipse(cir8X, cir8Y, 90, 90);
        fill(255, 0, 0, 90);
        ellipse(cir8X, cir8Y, 60, 60);
        fill(70, 138, 122, 90);
        ellipse(cir8X, cir8Y, 20, 20);
    }
    for (let i = 0; i < 5; i++) {
        fill(4, 57, 20, 90);
        rect(ninX + 120, ninY - 60, 150, 150);
        fill(255, 255, 255, 90);
        ellipse(cir9X, cir9Y, 110, 110);
        fill(255, 0, 0, 90);
        ellipse(cir9X, cir9Y, 80, 80);
        fill(225, 225, 225, 90);
        ellipse(cir9X, cir9Y, 50, 50);
        fill(241, 247, 230, 100);
        ellipse(cir9X, cir9Y, 20, 20);
    }
}

