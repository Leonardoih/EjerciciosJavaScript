const formulario = document.querySelector('#formulario');

//Creando el Evento
formulario.addEventListener('submit', validarFormulario);

//las funciones a usar
function validarFormulario(e) {
	e.preventDefault();
	const numA = parseInt(document.querySelector('#nombre').value);
	const numB = parseInt(document.querySelector('#edad').value);
	const resp = document.getElementById('respuesta');

	if (Number.isInteger(numA) && Number.isInteger(numB)) {
		if (numA >= 1 && numB >= 1) {
			if (numA > numB)
				resp.textContent = `el Primer numero ${numA} es mayor que el Segundo Numero ${numB}`;
			else if (numB > numA)
				resp.textContent = `el Segundo numero ${numB} es mayor que el Primer Numero ${numA}`;
			else if (numA === numB)
				resp.textContent = `Ambos numeros son Iguales ${numA} y ${numB}`;
		} else {
			resp.textContent = `ingrese un nuemero Valido mayor a 0 por favor`;
		}
	} else {
		resp.textContent = '';
		alert('El valor Ingresado no es un Numero');
	}
	formulario.reset();
}
