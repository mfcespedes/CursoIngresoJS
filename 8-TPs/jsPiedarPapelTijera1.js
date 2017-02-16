/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina=Math.floor((Math.random()*3)+1);
	/*switch(eleccionMaquina){
		case 1:
			eleccionMaquina="piedra";
			break;
		case 2:
			eleccionMaquina="papel";
			break;
		case 3:
			eleccionMaquina="tijera";
			break;
	break;
	};*/
	
	if (eleccionMaquina==1)
	{
		eleccionMaquina="piedra";
	};
		if(eleccionMaquina==2)
		{
			eleccionMaquina="papel";
		};
			if (eleccionMaquina==3)
			{
				eleccionMaquina="tijera";
			};

}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina!="piedra") 
	{
		switch (eleccionMaquina)
		{
			case "papel":
				alert("Perdiste");
				break;
			case "tijera":
				alert("Ganaste");
				break;
		break;
		}
	}
		else
		{
			alert("empató");
		};
	alert("la maquina eligió "+eleccionMaquina);
}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina!="papel") 
		{
			switch (eleccionMaquina)
			{
				case "piedra":
					alert("Ganaste");
					break;
				case "tijera":
					alert("Perdiste");
					break;
			break;
			}
		}
			else
			{
				alert("empató");
			};
		alert("la maquina eligió "+eleccionMaquina);

}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina!="tijera") 
		{
			switch (eleccionMaquina)
			{
				case "papel":
					alert("Ganaste");
					break;
				case "piedra":
					alert("Perdiste");
					break;
			break;
			}
		}
			else
			{
				alert("empató");
			};
		alert("la maquina eligió "+eleccionMaquina);
	
}//FIN DE LA FUNCIÓN