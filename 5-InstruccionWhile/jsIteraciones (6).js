function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while(contador<5)
	{
		numero=prompt("Ingresá un numero");
		numero=parseInt(numero);
		contador=contador+1;
		acumulador=acumulador+numero;
	}

	promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN