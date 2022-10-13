const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarFormulario);
function validarFormulario(e) {
	e.preventDefault();
	const numA = parseInt(document.querySelector('#numA').value);
	const numB = parseInt(document.querySelector('#numB').value);
	const resp = document.getElementById('respuesta');
	if (Number.isInteger(numA) && Number.isInteger(numB)) {
		if (numA >= 1 && numB >= 1) {
			if (numA > numB) {
				for (let i = numB + 1; i <= numA - 1; i++) {
					console.log((resp.textContent += `${i} `));
				}
			} else if (numB > numA) {
				for (let i = numA + 1; i <= numB - 1; i++) {
					resp.textContent += `${i} `;
				}
			} else if (numA === numB) {
				resp.textContent = `Ambos numeros son Iguales ${numA} y ${numB}`;
			}
		} else {
			resp.textContent = `ingrese un nuemero Valido mayor a 0 por favor`;
		}
	} else {
		resp.textContent = '';
		alert('El valor Ingresado no es un Numero');
	}
	formulario.reset();
}
