const contarCaracteres = (saludo) => {
	let textoEnteroEnNumeros = saludo.length;
	let textoRecortado = saludo.slice(0, 5);
	
	console.log(saludo);
	console.log(`la cadena tiene ${textoEnteroEnNumeros} caraceres`);
	console.log(textoRecortado);
};
const pasarTextoA_Array = (cadena = "", separador=undefined) => {
 const res = cadena.split(separador);
 console.log(res);
};
contarCaracteres('Hola Leonardo de !! !! lucas leo');
pasarTextoA_Array("Hola Leonardo/ de 11 2 555, !! !! lucas, leo de/ nue v o",",;/");

