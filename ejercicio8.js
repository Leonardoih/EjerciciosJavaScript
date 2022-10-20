function ejecutar() {
	let numberB;
	do {
		numberB = parseInt(prompt('join a number'));
	} while (isNaN(numberB));

	if (numberB % 2 == 0) {
		alert(`the number ${numberB} is even`);
	} else {
		alert(`the number ${numberB} is odd`);
	}
}
