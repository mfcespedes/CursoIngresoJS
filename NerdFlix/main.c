#include <stdio.h>
#include <stdlib.h>

/*
1- mostrar cada uno
2- mostrar clientes con sus series
3- por cada serie los clientes que la estan viendo
4- todos los clientes que ven una serie en particular (El usuario ingresa el titulo)
5- La serie menos popular
6- Todas las series que ven los clientes de nombre "Juan"
*/


typedef struct
{
    int idSerie;
    char titulo[20];
    int temporadas;
    char genero[20];
    int estado;
} eSerie;

typedef struct
{
    int idCliente;
    char nombre[30];
    int estado;

} eCliente;

typedef struct
{
    int idCliente;
    int idSerie;
} eClientes_Series;

typedef struct//Para el punto 5
{
    int idSerie;
    int cont;
} eLoser;


int main()
{
    printf("Hello world!\n");
    return 0;
}

void cargarSeries(eSerie series[])
{
    int idSerie[5]= {100,101,102,103,104};
    int estado[5]= {1,1,1,1,1};
    char titulo[5][30]= {"TBBT","BB","GOT","AHS","SCD"};
    int temporadas[5]= {9,7,7,6,1};
    char genero[5][30]= {"Comedia","Policial","Ciencia Ficcion","Terror","Comedia"};

    int i;
    for(i=0; i<5; i++)
    {
        series[i].idSerie = idSerie[i];
        strcpy(series[i].titulo, titulo[i]);
        series[i].estado = estado[i];
        series[i].temporadas = temporadas[i];
        strcpy(series[i].genero, genero[i]);
    }

}
void cargarClientes(eCliente clientes[])
{
    int id[10] = {1,2,3,4,5,6,7,8,9,10};
    char nombres[10][30]= {"juan","maria","pedro","luis","romina","jose","andrea","patricia","luciano","camila"};
    int estado[10]= {1,1,1,1,1,1,1,1,1,1};

    int i;

    for(i=0; i<10; i++)
    {
        clientes[i].idCliente = id[i];
        strcpy(clientes[i].nombre, nombres[i]);
        clientes[i].estado = estado[i];

    }

}

void cargarCliente_Serie(eClientes_Series clientesSeries[])
{

    int cliente[20] = {1,1,1,2,2,3,4,4,5,5,5,7,8,8,8,9,10,10,10,10};
    int serie[20]= {101,102,103,104,103,101,101,102,104,101,101,101,101,102,103,102,101,103,102,104};
    int i;

    for(i=0; i<20; i++)
    {
        clientesSeries[i].idCliente=cliente[i];
        clientesSeries[i].idSerie = serie[i];
    }

}
