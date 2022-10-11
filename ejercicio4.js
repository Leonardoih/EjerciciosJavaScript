const numbersArray = [];
function agregar() {
	const getNumber = parseInt(document.getElementById('number').value);

	numbersArray.push(getNumber);
	console.log(numbersArray);
	console.log(numbersArray.length);

	const sumarArray = numbersArray.reduce(
		(acumulador, elemento) => acumulador + elemento,
		0
	);
	console.log(sumarArray);
}
