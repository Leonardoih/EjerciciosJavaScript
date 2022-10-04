function agregar() {
	//console.log('capturando el onclick');
	function Numeros(numero) {
		this.numero = numero;
	}
	let numeroCapturar = parseInt(
		document.getElementById('numero').value
	);

	grupoNumeros = new Numeros(numeroCapturar);

	//console.log(grupoNumeros);
	//console.log(numeroCapturar);
	agregarAlArray();
	sumarArray();
}

let pushArray = [];
function agregarAlArray() {
	pushArray.push(grupoNumeros);
	console.log(pushArray);
	//console.log('sumando');
}

function sumarArray() {
	const respuesta1 = document.getElementById('respuesta');

	let suma = 0;
	for (let i = 0; i < pushArray.length; i++) {
		suma += pushArray[i].numero;
		let totalLength = pushArray.length;
		media = suma / totalLength;
		pushArray.sort((a, b) => a - b);
		let bajoMedio = Math.floor((pushArray.length - 1) / 2);
		let altoMedio = Math.ceil((pushArray.length - 1) / 2);
		mediana =
			(pushArray[bajoMedio].numero + pushArray[altoMedio].numero) / 2;
	}
	console.log('la Mediana Es Igual A :' + mediana);
	console.log('la Suma es Igual a ' + suma);
	console.log('la media es igual a ' + media);
	respuesta1.textContent = `la Mediana Es Igual A : ${mediana}
		<br />
		la Suma es Igual a ${suma} 
	 		 la media es igual a ${media}`;
}

// function media() {
// 	let suma = 0;
// 	for (let i = 0; i < pushArray.length; i++) {
// 		suma += pushArray[i].numero;
// 		let totalLength = pushArray.length;
// 		media = suma / totalLength;
// 	}
// 	console.log('la media es igual a ' + media);
// }

// function media() {
// 	let suma = 0;
// 	for (let i = 0; i < pushArray.length; i++) {
// 		suma += pushArray[i].numero;
// 		let media = suma / pushArray.length;
// 		console.log('la media es ' + media);
// 	}
// }

// var num = parseInt(prompt('Cantidad de numeros: '));
// var sumando;
// var total = 0;
// arr = new array();
// for (var i = 0; i < num; i++) {
// 	sumando = parseInt(prompt('Numeros: '));

// 	sumando.push(arr);
// 	total = parseInt(total) + parseInt(sumando);
// }

// console.log(nuevoTotal);
// alert(`Suma total: ${parseInt(total)}`);
