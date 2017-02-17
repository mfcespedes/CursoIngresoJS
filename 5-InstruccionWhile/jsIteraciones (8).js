function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	respuesta=prompt("¿Comenzar?")

	while(respuesta=="si")
	{
		numero=prompt("Ingresá un numero");
		numero=parseInt(numero);
		
		if (numero<0) 
		{
			negativo=negativo*numero;
		}
		else
		{
			positivo=positivo+numero;
		}
		respuesta=prompt("¿queres seguir jugando?");
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN