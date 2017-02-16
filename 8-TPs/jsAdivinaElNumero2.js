/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 	alert("Adivina el numero");
		numeroSecreto=Math.floor((Math.random()*100)+1);
		contadorIntentos=0;
}

function verificar()
{
	numeroIngresado=document.getElementById('numero').value;
	contadorIntentos=contadorIntentos+1;
	document.getElementById('intentos').value=contadorIntentos;
	if (numeroIngresado==numeroSecreto) {
		switch(contadorIntentos){
			case 1:
				alert("Usted es un Psíquico");
				break;
			case 2:
				alert("Excelente percepción");
				break;
			case 3:
				alert("Esto es suerte");
				break;
			case 4:
				alert("Excelente técnica");
				break;
			case 5:
				alert("Usted está en la media");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10: 
				alert("falta tecnica");
				break;
			default:
					alert("Afortunado en el amor");
				break;	
			};
		document.getElementById('numero').value="";
		document.getElementById('intentos').value="";
		}
	else
		{
			if (numeroIngresado>numeroSecreto) 
				{
					alert("Te pasate");
				}
			else
				{
					alert("Te falta");
				};
		};
}