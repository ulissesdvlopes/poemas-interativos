let light = document.getElementById('light');

const onMouseMove = (e) =>{
    light.style.left = `calc(${e.pageX}px - 5vh)`;
    light.style.top = `calc(${e.pageY}px - 12vh)`;
}
  
  document.addEventListener('pointermove', onMouseMove);