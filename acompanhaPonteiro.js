//função para que um elemento acompanhe o ponteiro do mouse

function acompanhaPonteiro(seletor, palavra) {

	//evento onmousemove na área alvo da função

	var x = event.clientX;
    var y = event.clientY;
    var elemento = document.querySelector(seletor);
    //para garantir que o elemento terá position absolute:
    elemento.style.position = "absolute";

    elemento.innerHTML = palavra;
    elemento.style.left = (x - 20) + "px";
    elemento.style.top = (y - 20) + "px";
}