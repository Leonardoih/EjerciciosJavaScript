numbersArray = [];
const agregar = () => {
	const getNumber = parseInt(document.getElementById('number').value);
	if (getNumber != "") {
		numbersArray.push(getNumber);
	} else {
		console.log('ingresa un valor valido');
	}

	console.log(numbersArray);
};
