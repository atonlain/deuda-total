var personas = [
	{
		nombre: "Carlos",
		compras: [
			{ nombre: "Notebook DELL", precio: 9020.23 },
			{ nombre: "Lámpara de bajo consumo", precio: 200 },
			{ nombre: "Chicles masticables", precio: 9 }
		]
	},
	{
		nombre: "Juan",
		compras: [
			{ nombre: "Papelitos", precio: 10 },
			{ nombre: "Coca-Cola", precio: 25 },
		]
	}
]

var deudaTotal = 0;
personas.forEach(function(persona) {
	var deuda = 0;
	persona.compras.forEach(function(compra) {
		deuda += compra.precio;
	});

	deudaTotal += deuda;
});

console.log("La deuda total es $" + deudaTotal);