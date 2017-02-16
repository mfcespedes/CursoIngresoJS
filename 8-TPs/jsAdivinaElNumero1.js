/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
		document.getElementById('numero').value="";
		document.getElementById('intentos').value="";
		alert("Adivina el numero, tenes 6 intentos");
		numeroSecreto=Math.floor((Math.random()*100)+1);
		contadorIntentos=0;
}
		

function verificar()
{
	numeroIngresado=document.getElementById('numero').value;
	contadorIntentos=contadorIntentos+1;
	document.getElementById('intentos').value=contadorIntentos;
		if (numeroIngresado>numeroSecreto) 
			{
				alert("Te pasaste...");
			};
			if (numeroIngresado<numeroSecreto) 
				{
					alert("Te falta...");
				};
				if (numeroIngresado==numeroSecreto) 
					{
						alert("Sos un ganador y acertaste en solo "+contadorIntentos);
						document.getElementById('numero').value="";
						document.getElementById('intentos').value="";	
					};
					if (numeroIngresado!=numeroSecreto&&contadorIntentos==6) 
						{
							document.getElementById('numero').value="";
							document.getElementById('intentos').value="";
							alert("Perdiste, volvé a comenzar el numero era: "+numeroSecreto);
						};
	
	
}