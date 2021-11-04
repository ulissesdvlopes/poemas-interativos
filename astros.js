var sol = document.querySelector("#sol");

sol.addEventListener("mouseover", function() {
	this.style.color = "#FFD700";
});

var lua = document.querySelector("#lua");

lua.addEventListener("mouseover", function () {
	this.style.color = "#DCDCDC";
});

var releve = document.querySelector("#releve");

releve.addEventListener("mouseover", function(){
	this.innerHTML = "Releve os astros";
})