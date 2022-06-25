let sketch = function(p) {

  p.setup = function(){
    p.createCanvas(window.innerWidth - 5, (window.innerHeight - 5)*0.6);
  }

  p.mousePressed = function(){
    stamp(p);
  }

};

new p5(sketch, 'canvas');

let preview = function(p) {

  p.setup = function(){
    p.createCanvas(window.innerWidth - 5, (window.innerHeight - 5)*0.2);
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
