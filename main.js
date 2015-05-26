getMensaje = function() {
	var a = 1;
	var b = 2;
	return "La edad de la persona más 10 es ";
}

imprimirUnaCuentaBoluda = function(persona) {
	var mensajeInicial = getMensaje();
	var edadModificada = persona.edad + 10;
	console.log(mensajeInicial + edadModificada);
};

var persona = { nombre: "Rodri", edad: 23 }

imprimirUnaCuentaBoluda(persona);

console.log("Hola " + persona.nombre + ", ¿cómo va?");