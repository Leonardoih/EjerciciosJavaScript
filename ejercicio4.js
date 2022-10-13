const numbersArray = [];
function agregar() {
	const getNumber = parseInt(document.getElementById('number').value);

	numbersArray.push(getNumber);
	// console.log(numbersArray);
	// console.log(numbersArray.length);

	// const sumarArray = numbersArray.reduce(
	// 	(acumulador, elemento) => acumulador + elemento,
	// 	0
	// );
	// console.log(sumarArray);
}

function calcular() {
	const resultado = document.getElementById('resultado');
	const sumarArray = numbersArray.reduce(
		(acumulador, elemento) => acumulador + elemento,
		0
	);
	resultado.textContent = `El resultado de la suma es: ${sumarArray}`;
}
