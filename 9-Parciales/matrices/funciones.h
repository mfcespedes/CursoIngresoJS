#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

typedef struct
{
    int codigo, cantidad, estado;
    char descripcion[50];
    float importe;
} DatosComercio;

/**
*\brief Inicializa el estado a cero
*\param Estructura con los datos del producto
*\return No devuelve nada
**/

void iniciarCero(DatosComercio productos[], int tamano)
{
    int i;
    for (i=0; i<tamano; i++)
    {
        productos[i].estado = 0;
    }
}

/**
*\brief Solicita y almacena los datos del producto
*\param Mediante una estructura existen los datos del producto
*\return No retorna nada
**/

void alta(DatosComercio productos[], int tamano)
{
    int i;
    for(i=0; i<tamano; i++)
    {
        if(productos[i].estado == 0)
        {
            printf("Ingrese Codigo: ");
            scanf("%d", &productos[i].codigo);
            printf("Ingrese Descripcion: ");
            fflush(stdin);
            gets(productos[i].descripcion);
            printf("Ingrese Importe: ");
            scanf("%f", &productos[i].importe);
            printf("Ingrese Cantidad: ");
            scanf("%d", &productos[i].cantidad);

            productos[i].estado = 1;
            break;
        }
    }
}

/**
*\brief Realiza la modificacion segun lo que el usuario desee
*\param Datos de la estructura a modificar
*\return No retorna nada
**/

void modificar(DatosComercio productos[], int tamano)
{
    int flagEncontro=0, i, auxCodigo, auxCantidad, opcion;
    float auxImporte;
    char auxDescripcion[20], respuesta;
    printf("Ingrese Codigo: ");
    scanf("%d", &auxCodigo);
    for(i=0; i<tamano; i++)
    {
        if(productos[i].estado==1)
        {
            if(auxCodigo == productos[i].codigo)
            {
                printf("%s\t%.2f\t%d\n", productos[i].descripcion,productos[i].importe,productos[i].cantidad);
                printf("Que desea modificar:\n1. Descripcion\n2. Importe\n3. Cantidad\n4. Salir\n");
                scanf("%d", &opcion);
                switch(opcion)
                {
                    case 1:
                        printf("Ingrese nueva descripcion: ");
                        scanf("%s", auxDescripcion);
//                        printf("Esta seguro de realizar la modificacion s/n: ");
//                        respuesta = getche();
//                        if(respuesta=='s')
//                        {
                            strcpy(productos[i].descripcion,auxDescripcion);
//                        }
//                        else
//                        {
//                            printf("Accion cancelada por el usuario!!!");
//                        }
                        break;
                    case 2:
                        printf("Ingrese nuevo importe: ");
                        scanf("%f", &auxImporte);
//                        printf("Esta seguro de realizar la modificacion s/n: ");
//                        respuesta = getche();
//                        if(respuesta=='s')
//                        {
                            productos[i].importe = auxImporte;
//                        }
//                        else
//                        {
//                            printf("Accion cancelada por el usuario!!!");
//                        }
                        break;
                    case 3:
                        printf("Ingrese nueva cantidad: ");
                        scanf("%d", auxCantidad);
                        printf("Esta seguro de realizar la modificacion s/n: ");
                        respuesta = getche();
                        if(respuesta=='s')
                        {
                            productos[i].cantidad = auxCantidad;
                        }
                        else
                        {
                            printf("Accion cancelada por el usuario!!!");
                        }
                        break;
                    case 4:
                        break;
                }
            }
        }
    }
}

