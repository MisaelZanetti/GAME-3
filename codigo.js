let player1;
let player2;
let pelota;
let p11;
let p21;
let p31;
let p41;
let p51;
let p12;
let p22;
let p32;
let p42;
let p52;
let velocidad = ['-5', '5'];

function setup() {
    createCanvas(800, 725);
    player1 = createSprite(30, height / 2, 40, 150);
    player1.shapeColor = color(23, 53, 243);
    player2 = createSprite(770, height / 2, 40, 150);
    player2.shapeColor = color(23, 53, 243);
    pelota = createSprite(width / 2, height / 2, 40);
    pelota.shapeColor = color(255);
    pelota.velocity.x = random(velocidad);
    p11 = createSprite(50, (height / 2) - 65, 3, 20);
    p11.shapeColor = color(23, 53, 243);
    p21 = createSprite(50, (height / 2) - 45, 3, 20);
    p21.shapeColor = color(23, 53, 243);
    p31 = createSprite(50, height / 2, 3, 70);
    p31.shapeColor = color(23, 53, 243);
    p41 = createSprite(50, (height / 2) + 45, 3, 20);
    p41.shapeColor = color(23, 53, 243);
    p51 = createSprite(50, (height / 2) + 65, 3, 20);
    p51.shapeColor = color(23, 53, 243);
}

function draw() {
    background(0);
    drawSprites();
    if (keyIsDown(UP_ARROW) === true) {
        player1.velocity.y = -10;
        p11.velocity.y = -10;
        p21.velocity.y = -10;
        p31.velocity.y = -10;
        p41.velocity.y = -10;
        p51.velocity.y = -10;
    }
    if (keyIsDown(DOWN_ARROW) === true) {
        player1.velocity.y = 10;
        p11.velocity.y = 10;
        p21.velocity.y = 10;
        p31.velocity.y = 10;
        p41.velocity.y = 10;
        p51.velocity.y = 10;
    }
    if (keyIsDown(87) === true) {
        player2.velocity.y = -10;
    }
    if (keyIsDown(83) === true) {
        player2.velocity.y = 10;
    }
    if (player1.position.y > 650) {
        player1.position.y-=10;
        p11.position.y-=10;
        p21.position.y-=10;
        p31.position.y-=10;
        p41.position.y-=10;
        p51.position.y-=10;
    }
    if (player1.position.y < 75) {
        player1.position.y+=10;
        p11.position.y+=10;
        p21.position.y+=10;
        p31.position.y+=10;
        p41.position.y+=10;
        p51.position.y+=10;
    }
    if (player2.position.y > 650) {
        player2.position.y-=10;
    }
    if (player2.position.y < 75) {
        player2.position.y+=10;
    }
}

function gameover() {
    
}