/*tabla de Multiplicar de un numero ingresado por el Usurio*/

function ejecutar() {
	let numberForMutiplication = ' ';

	do {
		numberForMutiplication = parseInt(
			prompt('ingresa el nuemro que quieres multiplicar')
		);
	} while (isNaN(numberForMutiplication));
	res = '';
	for (let i = 1; i <= 10; i++) {
		res += `${numberForMutiplication} x ${i} = ${
			numberForMutiplication * i
		}, ${' '}`;
		console.log(
			`${numberForMutiplication} * ${i} = ${
				numberForMutiplication * i
			}`
		);
	}
	alert(`la multiplicacion  es = ${res}`);
}
