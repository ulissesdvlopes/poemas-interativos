function setup() {
    createCanvas(window.innerWidth - 5, window.innerHeight - 5);
    textSize(32);
}

function draw() {
    if(mouseIsPressed == true) {
      text('vazio', mouseX, mouseY);
    }
  }
