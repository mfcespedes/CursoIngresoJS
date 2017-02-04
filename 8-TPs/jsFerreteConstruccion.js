/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);

	var resultado=((2*(largo+ancho))*3);

	alert(resultado);

}
function Circulo () 
{
	var radio;

	radio=document.getElementById('Radio').value;

	var resultado=((2*3.14*radio)*3);

	alert(resultado);
}
function Materiales () 
{
	var largo;
	var ancho;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	var metroCuadrado=(largo*ancho);

	var cemento=metroCuadrado*2;
	var cal=metroCuadrado*3;

	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}