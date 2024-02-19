const total = document.querySelector("#total"),
	  botones1 = document.querySelector("#botones1");

botones1.addEventListener("click", e => {
	btn = e.target.firstChild.textContent;
	resultado = btn * 100;
	console.log(resultado);
	total.innerText= resultado; 
})

