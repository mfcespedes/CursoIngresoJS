#include <stdio.h>
#include <stdlib.h>
#include "funciones.h"
#define A 1000
/*1) Desarrollar una aplicación para un comercio que le permita administrar sus productos.
Datos de cada producto:
Código (1 a 1000) (Validar)
Descripción (máximo 50 caracteres) (Validar)
Importe (Validar)
Cantidad (Validar)
1. ALTAS: No es necesario el ingreso de todos los productos.
2. MODIFICAR: Se ingresará el Código de Producto, permitiendo modificar:
Descripción
Importe
Cantidad
3. BAJA: Se ingresa el Código de Producto y se limpiarán los datos asociados
4. LISTAR: Realizar un solo listado de los datos ordenados por descripción (descendente)
*/


int main()
{
    DatosComercio productos[A];
    int opcion;
    char seguir='s';

    iniciarCero(productos, A);
    do
    {
        printf("1. Alta\n2. Modificar\n3. Baja\n4. Listar\n5. Salir\n");
        printf("Ingrese una opcion: ");
        scanf("%d", &opcion);

        switch(opcion)
        {
        case 1:
            alta(productos,A);
            break;
        case 2:
            modificar(productos,A);
            break;
        case 3:
            //baja(productos,A);
            break;
        case 4:
            //listar(productos,A);
            break;
        case 5:
            seguir='n';
            break;

        }
    }while(seguir=='s');
}

