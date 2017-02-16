/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var	primerNumero;
var segundoNumero;
var operacion;
var numeroIngresado;

function comenzar()
{
	primerNumero=Math.floor((Math.random()*10)+1);
	segundoNumero=Math.floor((Math.random()*10)+1);
	operacion=Math.floor((Math.random()*4)+1);
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);
	document.getElementById('PrimerNumero').value=primerNumero;
	document.getElementById('SegundoNumero').value=segundoNumero;
	
	switch(operacion)
	{
		case 1:
			operacion="+";
			break;
		case 2:
			operacion="-";
			break;
		case 3:
			operacion="*";
			break;
		case 4:
			operacion="/";
			break;
	}
	document.getElementById('Operador').value=operacion;

}//FIN DE LA FUNCIÓN
function Responder()
{
	document.getElementById('PrimerNumero').value=primerNumero;
	document.getElementById('Operador').value=operacion;
	document.getElementById('SegundoNumero').value=segundoNumero;

	switch(operacion)
	{
		case "+":
			respuesta=primerNumero+segundoNumero;
			break;
		case "-":
			respuesta=primerNumero-segundoNumero;
			break;
		case "*":
			respuesta=primerNumero*segundoNumero;
			break;
		case "/":
			respuesta=primerNumero/segundoNumero;
			break;
	}

	numeroIngresado=document.getElementById('Respuesta').value;
	numeroIngresado=parseInt(numeroIngresado);

	if (respuesta==numeroIngresado) 
	{
		alert("Es correcto");
	}
	else 
	{
		alert("No es correcto");
	}

}//FIN DE LA FUNCIÓN
