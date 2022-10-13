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
				for (let i = numB; i <= numA; i++) {
					if (i % 2 == 0) {
						resp.textContent += `${i} `;
					}
				}
			}
		}
	}
}
