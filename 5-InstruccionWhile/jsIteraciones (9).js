function Mostrar()
{

	var contador=0;
	// declarar variables
	var edad;
	var nombre;
	var maximo;
	var minimo;
	var nombreMayor;
	var sexo;
	var nota;
	var sexoNotaMinima;
	var notaMinima;
	var desaprobaron;
	var desaprobadoHombres;
	var desaprobadoMujeres;
	var promedioNotas;
	var acumuladorNotas;
	var edadPromedioMujeres;
	var edadMujeres;
	var contarMujeres;
	var bandera="nadie";
	var nombreDel10;
	var sexoDel10;
	var edadDel10;

	var aprobado=0;
	var respuesta='si';

	while(respuesta!='no')
	{
		
		edad=prompt("Ingrese un edad");
		edad=parseInt(edad);
		while(edad<0||edad>100)
		{
			edad=prompt("Ingrese edad entre 1 a 100");
			edad=parseInt(edad);
		}


		sexo=prompt("Ingrese sexo F o M");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Ingrese sexo F o M");
		}

		// Promedio edad de las Mujeres

		if (sexo="f")// ME FALTA
		{
			edadMujeres=edadMujeres+1;
		}

		nota=prompt("Ingrese nota");
		nota=parseInt(nota);
		
		while(nota<0||nota>11)
		{
			nota=prompt("Ingrese nota del 1 al 10");
			nota=parseInt(nota);
		}

		// promedio de todas las notas

		acumuladorNotas=acumuladorNotas+nota;
		
		// Creando Bandera!!!

		if (nota==10&&bandera=="nadie")
		{
			nombreDel10=nombre;
			sexoDel10=sexo;
			edadDel10=edad;
		}

		//Cantidad de personas aprobadas


		if (nota>5)
		{
			aprobado=aprobado+1
		}
		
		// Cuantos Hombres y Mujeres desaprobaron

		if (sexo="f"&&nota<5)
		{
			desaprobaron=desaprobaron+1;
			desaprobadoMujeres=sexo;
		}
		if (sexo="m"&&nota<5) 
		{
			desaprobaron=desaprobaron+1;
			desaprobadoHombres=sexo;
		}

		// Cuantas Mujeres notar par y menor de edad

		if(nota>4&&nota)
			//(sexo="f"&&nota>4&&edad<18)
		{
			contarMujeres=contarMujeres+1
		}

		contador=contador+1;
		nombre=prompt("Por favor ingrese Nombre");
		if(contador==1)
		{
			maximo=edad;
			minimo=edad;
			nombre=nombreMayor;
		}
		else
		{
			if (edad>maximo)
			{
				maximo=edad;
				nombreMayor=nombre;
			}
				if (edad<minimo)
				{
					minimo=edad;

				}
		}

		if (contador==1)
		{
			notaMinima=nota;
			sexoNotaMinima=sexo
		}
		else
		{
			if(nota<notaMinima)
			{
				notaMinima=nota;
				sexoNotaMinima=sexo;

			}
		}

		respuesta=prompt("para salir teclee NO");
		
	}//while(respuesta!='no')

	promedioNotas=acumuladorNotas/contador;
	edadPromedioMujeres=edadMujeres/contador;

}//FIN DE LA FUNCIÓN