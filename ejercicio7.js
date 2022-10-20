function ejecutar() {
	const numberA = parseInt(prompt('join a number'));
	// alert('this is a number ' + numberA + ' ' + typeof numberA);
	res = '';
	for (let i = 0; i <= numberA; i++) {
		if (numberA % i == 0) {
			res += `${i},${' '}`;
			console.log(i);
		}
	}
	alert(`the numbers divisible by  ${numberA} are : ${res}`);
}
