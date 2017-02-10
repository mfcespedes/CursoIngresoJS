function Mostrar()
{
//tomo la edad  
	var edad=document.getElementById('edad').value;
	if (edad>18)
	 	{
	 		alert("Es mayor de edad");
	 	};
		 	if (edad<13)
		 	{
		 		alert("Es niño");
		 	};
		 		if (edad<18&&edad>12)   
		 		{
		 			alert("Es adolescente");
		 		};

	/*if (edad<18&&edad>12)   
		 	{
		 		alert("Es adolescente");
		 	};
		else				//SI NO ES ADOLESCENTE ENTONCES
			{
			if (edad>18)
			 	{
			 		alert("Es mayor de edad");
				}
			else
				{
				alert("Es niño");
				}
			}
			 	*/
}//FIN DE LA FUNCIÓN