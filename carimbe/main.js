function setup() {
    createCanvas(window.innerWidth - 5, window.innerHeight - 5);
    textSize(32);
}

function draw() {}

function mousePressed() {
  stamp();
}

var angle = 45;
var size = 32;
var word = "hahaha";

function stamp() {
    //stamp
    push();
    
    angleMode(DEGREES);
    translate(mouseX, mouseY);
    
    textSize(size);
    fill(255,0,0);
    rotate(angle);
    
    textAlign(CENTER,CENTER);
    text(word, 0, 0);
    pop();
    return false;
}
