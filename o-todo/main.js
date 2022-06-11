let light = document.getElementById('light');

const onMouseMove = (e) =>{
    light.style.left = `calc(${e.pageX}px - 8vh)`;
    light.style.top = `calc(${e.pageY}px - 8vh)`;
}
  
  document.addEventListener('pointermove', onMouseMove);