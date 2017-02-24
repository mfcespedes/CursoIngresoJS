function Mostrar()
{
	var contador=0;
	var numeroRandom;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;


	for(;contador<10000;contador++)
	{
		numeroRandom=Math.floor((Math.random() * 10) + 1);
		switch(numeroRandom)
		{
			case 1:
				contador1++;
				break;
			case 2:
				contador2++;
				break;
			case 3:
				contador3++;
				break;
			case 4:
				contador4++;
				break;
			case 5:
				contador5++;
				break;
			case 6:
				contador6++;
				break;
			case 7:
			if (contador7==7)
			{
				continue;
			}
				contador7++;
				break;
			case 8:
				contador8++;
				break;
			case 9:
				contador9++;
				break;
			case 10:
				contador10++;
				break;
		}

	}
	console.log("la cantidad de 1 "+contador1*contador/100+"%");
	console.log("la cantidad de 2 "+contador2*contador/100+"%");
	console.log("la cantidad de 3 "+contador3*contador/100+"%");
	console.log("la cantidad de 4 "+contador4*contador/100+"%");
	console.log("la cantidad de 5 "+contador5*contador/100+"%");
	console.log("la cantidad de 6 "+contador6*contador/100+"%");
	console.log("la cantidad de 7 "+contador7*contador/100+"%");
	console.log("la cantidad de 8 "+contador8*contador/100+"%");
	console.log("la cantidad de 9 "+contador9*contador/100+"%");
	console.log("la cantidad de 10 "+contador10*contador/100+"%");
	
	
}