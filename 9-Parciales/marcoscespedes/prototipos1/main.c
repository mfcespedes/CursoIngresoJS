#include <stdio.h>
#include <stdlib.h>

//int suma(int a, int b);
//int main()
//{
//    int x,y,z;
//    printf("ingrese numero a sumar: ");
//    scanf("%d",&x);
//    printf("ingrese numero a sumar: ");
//    scanf("%d",&y);
//    z=suma(x,y);
//    printf("La suma es %d",z);
//}
//int suma(int a, int b)
//{
//    int total;
//    total=a+b;
//    return total;
//}
//int var;
//void carga(void);
//void main(void)
//{
//int x,y,z;
//var=5;
//carga();
//printf("%d",var);
//}
//void carga(void)
//{
//var=55;
//}
//int var;
//void carga(void);
//void main(void)
//{
//int x,y,z;
//var=55;
//carga();
//printf("%d",var);
//}
//void carga(void)
//{
//int var;
//var=3;
//}

/*
void muestra(int x,int y);
void main(void)
{
int x,y;
printf("Ingrese un numero entero");
scanf("%d",&x);
printf("Ingrese un numero entero");
scanf("%d",&y);
muestra(x,y);
printf("\n-----valores dentro de main----");
printf("\nx vale %d \ny vale %d",x,y);
}
void muestra(int x,int y)
{
x=y;
printf("\n-----valores dentro de la funcion----");
printf("\nx vale %d \ny vale %d",x,y);
}*/

/*
int main()
{
    int num1, num2, num3, num4, num5, resultado, promedio;

    printf("Ingresa el 1er numero: ");
    scanf("%d", &num1);
    printf("Ingresa el 2do numero: ");
    scanf("%d", &num2);
    printf("Ingresa el 3er numero: ");
    scanf("%d", &num3);
    printf("Ingresa el 4to numero: ");
    scanf("%d", &num4);
    printf("Ingresa el 5to numero: ");
    scanf("%d", &num5);

    resultado=num1+num2+num3+num4+num5;
    promedio=resultado/5;
    printf("El medio es: %d", promedio);

    return 0;
}*/

/*Escribir un programa que realice las siguientes acciones
 Limpie la pantalla
 Asigne a 2 variables numero1 y numero2 valores distintos de cero
 Efectúe el producto de dichas variables
 Muestre el resultado pos pantalla
 Obtenga el cuadrado de numero1 y lo muestre par pantalla*/

int suma(int a, int b);
int resta(int a, int b);
int multiplica(int a, int b);
int divide(int a, int b);

int main()
{
    int a, b, c, d, e, f;
    printf("Ingresa 1 para sumar: ");
    scanf("%d", &a);
    printf("Ingresa 2 para restar: ");
    scanf("%d", &b);
    printf("Ingresa 3 para multiplicar: ");
    scanf("%d", &c);
    printf("Ingresa 4 para dividir: ");
    scanf("%d", &d);
    printf("Ingresa 5 para salir: ");
    scanf("%d", &e);


}

int suma(int a, int b)
{
    int resultado;
    resultado=a+b;
    return resultado;
}

int resta(int a, int b)
{
    int resultado;
    resultado=a-b;
    return resultado;
}

int multiplica(int a, int b)
{
    int resultado;
    resultado=a*b;
    return resultado;
}

int divide(int a, int b)
{
    if(b=0)
        {
            printf("El divisor debe ser distinto de 0 cero");
        }
    else
        {
            int resultado;
            resultado=a/b;
            return resultado;
        }
}
