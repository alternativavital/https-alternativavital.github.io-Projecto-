const total = document.querySelector("#total"),
	  botones1 = document.querySelector("#botones1");

botones1.addEventListener("click", e => {
	btn = e.target.firstChild.textContent;
	/coje el valor del boton para multiplicarlo/ 
	resultado = btn * 50;
	console.log(resultado);
	total.innerText= resultado; 
})

