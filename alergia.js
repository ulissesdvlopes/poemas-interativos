
class Alergia {
	constructor() {
		this.contador = 0;
		this.a = document.createElement('a');

		this.a.innerHTML = "alergia";

		this.a.style.position = "absolute";

		let x = Math.random() * 90;
		let y = Math.random() * 90;
		this.a.style.left = x + "%";
		this.a.style.top = y + "%";

		this.a.classList.add("alergia");
		this.a.href = "#";
		this.a.addEventListener("click", () => {
			this.contador++;


			if (this.contador == 2) {
				this.a.style.color = "red";
			}

			if(this.contador == 5) {
				this.a.textContent = "alegria";
				this.a.style.color = "blue";
				setTimeout(() => this.a.innerHTML = null //encontrar um modo de remover o elemento (pesquisar node/removeChild)
					, 3000);
			}
		});

		document.querySelector('body').appendChild(this.a);
	}
}


var intervalo = 4500;

(function repete() {
	new Alergia();
	if(intervalo > 2000) {
		intervalo = intervalo - 500;
	} else if(intervalo > 500) {
		intervalo = intervalo - 100;
	}
	console.log(intervalo);
	setTimeout(repete, intervalo);
})();