#include <stdio.h>
#include <stdlib.h>
#define E 5

typedef struct{
    int legajos, estado;
    char nombres[20];
    float sueldos;
}Eempleado;

void cargarEmpleado(Eempleado[], int);
void eliminarEmpleado(Eempleado[], int);
void modificarEmpleado(Eempleado[], int);
void ordenarEmpleado(Eempleado[], int);
void mostarEmpleado(Eempleado[], int);

int main()
{
    /*legajo nombre sueldo*/
    Eempleado empleado[E];
    int i, j;
    int auxInt, flagEncontro=0;
    char auxString[20];
    float auxFloat;
    int opcion;
    char seguir ='s', respuesta;


    do
    {
        printf("1.Alta\n2.Baja\n3.Modificacion\n4.ordenar\n5. mostrar\n6.salir\n");
        printf("Elija una opcion: ");
        scanf("%d", &opcion);

        switch(opcion)
        {
        case 1:
            cargarEmpleado(empleado, E);
            break;
        case 2:
            eliminarEmpleado(empleado, E);
            break;
        case 3:
            modificarEmpleado(empleado, E);
            break;
        case 4:
//            ordenarEmpleado(empleado, E);
            break;

        case 5:
            mostarEmpleado(empleado, E);
            break;
        case 6:
            seguir='n';
            break;

        }
    }
    while(seguir=='s');



}

void cargarEmpleado(Eempleado empleado[], int tam)
{
    int flagEncontro = 0, i;
    for(i=0; i<tam; i++)
    {
        if(empleado[i].estado == 0)
        {
            printf("Ingrese legajo: ");
            scanf("%d", &empleado[i].legajos);
            printf("Ingrese nombre: ");
            fflush(stdin);
            gets(empleado[i].nombres);
            printf("Ingrese sueldo: ");
            scanf("%f", &empleado[i].sueldos);

            empleado[i].estado = 1;
            flagEncontro = 1;

            break;
        }
    }
    if(!flagEncontro)
    {
        printf("No hay espacio suficiente!!!\n");
    }
}

 void eliminarEmpleado(Eempleado empleado[], int tam)
    {
        int flagEncontro=0, i;
        int auxInt;
        char respuesta;
        printf("Ingrese legajo: ");
        scanf("%d", &auxInt);
        for(i=0; i<tam; i++)
        {
            if(empleado[i].estado==1)
            {
                if(auxInt == empleado[i].legajos)
                {
                    printf("%d\t%s\t%.2f\n", empleado[i].legajos,empleado[i].nombres,empleado[i].sueldos);

                    printf("Esta seguro de eliminar el dato s/n: ");
                    respuesta = getche();
                    if(respuesta=='s')
                    {
                        empleado[i].estado = 0;
                    }
                    else
                    {
                        printf("Accion cancelada por el usuario!!!");
                    }

                    flagEncontro=1;
                    break;

                }

            }
        }
        if(flagEncontro==0)
        {
            printf("Dato inexistente");
        }
    }

void modificarEmpleado(Eempleado empleado[], int tam)
{
    int flagEncontro=0, i, auxInt;
    float auxFloat;
    char respuesta;
            printf("Ingrese legajo: ");
            scanf("%d", &auxInt);
            for(i=0; i<tam; i++)
            {
                if(empleado[i].estado==1)
                {
                    if(auxInt == empleado[i].legajos)
                    {
                        printf("%d\t%s\t%.2f\n", empleado[i].legajos,empleado[i].nombres,empleado[i].sueldos);
                        printf("Ingrese sueldo a modificar");
                        scanf("%f", &auxFloat);
                        printf("Esta seguro de realizar la modificacion s/n: ");
                        respuesta = getche();
                        if(respuesta=='s')
                        {
                            empleado[i].sueldos = auxFloat;
                        }
                        else
                        {
                            printf("Accion cancelada por el usuario!!!");
                        }

                        flagEncontro=1;
                        break;

                    }

                }
            }
            if(flagEncontro==0)
            {
                printf("Dato inexistente\n");
            }
}

//void ordenarEmpleado(Eempleado empleado[], int tam)
//{
//    int i,j,auxInt;
//    char auxString,
//    float auxFloat;
//
//        for(i=0; i<E-1; i++)
//            {
//                for(j=i+1; j<E; j++)
//                {
//                    if(strcmp(empleado[i].nombres, empleado[j].nombres)>0)
//                    {
//                        strcpy(auxString, empleado[i].nombres);
//                        strcpy(empleado[i].nombres, empleado[j].nombres);
//                        strcpy(empleado[j].nombres, auxString);
//
//                        auxInt=empleado[i].legajos;
//                        empleado[i].legajos = empleado[j].legajos;
//                        empleado[j].legajos = auxInt;
//
//                        auxFloat = empleado[i].sueldos;
//                        empleado[i].sueldos = empleado[j].sueldos;
//                        empleado[j].sueldos = auxFloat;
//
//                        auxInt=empleado[i].estado;
//                        empleado[i].estado = empleado[j].estado;
//                        empleado[j].estado = auxInt;
//                    }
//                    else
//                    {
//                        if(strcmp(empleado[i].nombres, empleado[j].nombres)==0)
//                        {
//                            if(empleado[i].legajos>empleado[j].legajos)
//                            {
//                                auxInt=empleado[i].legajos;
//                                empleado[i].legajos = empleado[j].legajos;
//                                empleado[j].legajos = auxInt;
//
//                                auxFloat = empleado[i].sueldos;
//                                empleado[i].sueldos = empleado[j].sueldos;
//                                empleado[j].sueldos = auxFloat;
//
//                                auxInt=empleado[i].estado;
//                                empleado[i].estado = empleado[j].estado;
//                                empleado[j].estado = auxInt;
//                            }
//                        }
//                    }
//                }
//            }
//
//}

void mostarEmpleado(Eempleado empleado[], int tam)
{
         int i;
            printf("Legajo\tnombre\tsueldo\n");
            for(i=0; i<E; i++)
            {
                if(empleado[i].estado!=0)
                    printf("%d\t%s\t%.2f\n", empleado[i].legajos,empleado[i].nombres,empleado[i].sueldos);
            }

}


