/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	var resultadoSuma;
	resultadoSuma=numeroUno+numeroDos
	alert("la suma es "+resultadoSuma);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	var resultadoResta;
	resultadoResta=numeroUno-numeroDos;
	alert("la resta es "+resultadoResta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	var resultadoMultiplicar;
	resultadoMultiplicar=numeroUno*numeroDos;
	alert("la multiplicación es "+resultadoMultiplicar);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	var resultadoDividir;
	resultadoDividir=numeroUno/numeroDos;
	alert("la división es "+resultadoDividir);
}

