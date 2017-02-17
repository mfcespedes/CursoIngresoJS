function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

	respuesta=prompt("¿queres sumar?");
	
	while(respuesta=="si")
	{
		
		numero=prompt("Ingresá un numero");
		numero=parseInt(numero);
		contador=contador+1;
		acumulador=acumulador+numero;
		respuesta=prompt("¿queres seguir sumando?");
	}

	promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN