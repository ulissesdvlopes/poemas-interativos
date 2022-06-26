let sketch = function(p) {

  p.setup = function(){
    if(p.windowWidth < 780) {
      p.createCanvas(p.windowWidth, p.windowHeight*0.6);
    } else {
      p.createCanvas(p.windowWidth, p.windowHeight*0.8);
    }
  }

  p.mousePressed = function(){
    if(p.mouseY > p.height) return;
    stamp(p);
  }

};

new p5(sketch, 'canvas');

let preview = function(p) {

  p.setup = function(){
    if(p.windowWidth < 780) {
      p.createCanvas(p.windowWidth, p.windowHeight*0.2);
    } else {
      p.createCanvas(p.windowWidth*0.5, p.windowHeight*0.2);
    }
  }

  p.draw = function(){
    p.background(255);
    stamp(p, p.width/2, p.height/2);
  }

};

new p5(preview, 'preview');

function stamp(p, posX, posY) {
    if(!posX) {
      posX = p.mouseX;
      posY = p.mouseY;
    } else {
      
    }
    p.push();
    
    p.angleMode(p.DEGREES);
    p.translate(posX, posY);
    
    p.textSize(wordSize);
    p.fill(wordColor);
    p.rotate(angle);
    
    p.textAlign(p.CENTER,p.CENTER);
    p.text(word, 0, 0);
    p.pop();
    return false;
}

var angle = 0;
var wordSize = 24;
var word = "";
var wordColor = "#000000";

document.getElementById("content").addEventListener("input", (e) => {
  //console.log(e.target.value);
  word = e.target.value;
});
document.getElementById("size").addEventListener("input", (e) => {
  //console.log(e.target.value);
  wordSize = Number(e.target.value);
});
document.getElementById("rotation").addEventListener("input", (e) => {
  //console.log(e.target.value);
  angle = Number(e.target.value);
});
document.getElementById("color").addEventListener("input", (e) => {
  //console.log(e.target.value);
  wordColor = e.target.value;
});
