let sketch = function(p) {

  p.setup = function(){
    if(p.windowWidth < 780) {
      p.createCanvas(p.windowWidth, p.windowHeight*0.6);
    } else {
      p.createCanvas(p.windowWidth, p.windowHeight*0.8);
    }
  }

  p.mouseClicked = function(){
    if(p.mouseY > p.height) return;
    if(focusMode) return;
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
    
    p.textSize(params.wordSize.value);
    p.fill(params.wordColor.value);
    p.rotate(params.rotation.value);
    
    p.textAlign(p.CENTER,p.CENTER);
    p.text(params.word.value, 0, 0);
    p.pop();
    return false;
}

var params = {
  word: {
    element: document.getElementById("content"),
    value: "convite"
  },
  wordSize: {
    element: document.getElementById("size"),
    value: 24
  },
  rotation: {
    element: document.getElementById("rotation"),
    value: 0
  },
  wordColor: {
    element: document.getElementById("color"),
    value: "#bb0000"
  }
}

var focusMode = false;

Object.entries(params).forEach(([key, obj]) => {
  console.log(key, obj);
  obj.element.addEventListener("input", e => {
    let newValue = e.target.value;
    if(key == "wordSize" || key == "rotation") {
      newValue = Number(newValue);
    }
    obj.value = newValue;
  })

  obj.element.addEventListener("focus", e => {
    focusMode = true;
    console.log("focusMode", focusMode);
  })

  obj.element.addEventListener("blur", e => {
    focusMode = false;
    console.log("focusMode", focusMode);
  })

})

