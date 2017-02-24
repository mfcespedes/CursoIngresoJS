function Mostrar()
{
	var mascota;
	var tienenMascota;
	var contadorMascotas;
	var contadorNoMascotas;
	var tipoMascota;
	var contador=0;
	var edad;
	var nombre;
	var maximo;
	var sexo;
	var nombreMascota;
	var edadMascota;
	var edadMaximaMascota;
	var nombreMascotaMayor;

	for( ;contador<1000; )
	{
		
		nombre=prompt("Ingrese nombre");
		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		sexo=prompt("Ingrese F o M");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Ingrese F o M");
		}
		
		if(contador==1)// falta terminar
		{
			maximo=edad;
			nombre=nombreMayor;
		}
		{
		

		mascota=prompt("Tiene mascotas? Si o No");
		while(mascota!="si"&&mascota!="no")
		{
			mascota=prompt("Tiene mascotas? Si o No");
		}

		if(mascota="si")
		{
			contadorMascotas=contadorMascotas++;
			while(tipoMascota!="perro"&&tipoMascota!="gato")
			{
				tipoMascota=prompt("Ingrese Perro o Gato");
			}

			nombreMascota=prompt("Ingrese el nombre de la mascota");
			edadMascota=prompt("Ingrese la edad de la mascota");
			while(edadMascota<0&&edadMascota>16)
			{
				edadMascota=prompt("Ingrese la edad hasta 15 años");
			}

			if(contador==0)
			{
				edadMaximaMascota=edadMascota;
				nombreMascotaMayor=nombreMascota;
			}
		else
		{
			contadorNoMascotas=contadorNoMascotas++;//edad mas viejo del que no tiene mascota
			
		}
		tipoMascota=prompt("Ingrese si es Perro o Gato");

		
		contador++;
		// necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años y el gato no tenga mas de 5 años de edad
	}
}