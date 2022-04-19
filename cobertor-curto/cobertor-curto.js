let cobertor = document.getElementById("cobertor");
let controller = document.getElementById("controller");

controller.addEventListener("input", e => {
    console.log(e.target.value);
    const position = e.target.value * 4 / 100;
    cobertor.style.top = `${position}rem`;
})
