function Mostrar()
{
//tomo la edad  
	var edad=document.getElementById('edad').value;
	if (edad<18&&edad>12)   //Esto se lee si edad<18 Y edad>12
	  	{
	  		alert("Es adolescente");
	  	}
	 else
	 	{
	 		alert("No es adolescente");
	 	};

	 /*if (!(edad<18&&edad>12)
	 	{
	 		alert("No es adolescente");
	 	} */

	//if (edad>=18||edad<=12) 


}//FIN DE LA FUNCIÓN