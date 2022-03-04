#include<stdio.h>
#include<stdlib.h>
#include"C:\Users\JOSU\Desktop\ESCOM\2do_Semestre\Estructura_de_datos\Pilas\Elem\ElemP.h"
#include"C:\Users\JOSU\Desktop\ESCOM\2do_Semestre\Estructura_de_datos\Pilas\Pila\Pila.h"

int esOperando(char);
int esParentesisIzq(char);
int esParentesisDer(char);
int peso(char);


int main(int argc, char *argv[]){
    int posicion = 1;
    Pila p = empty();

    while(posicion < argc){
        if(esOperando(*argv[posicion]))
            printf("%s", argv[posicion]);
        else if((peso(*argv[posicion]) > pesoP(top(p))) || isempty(p) || esParentesisIzqP(top(p)))
            p = push(*argv[posicion],p);
        else{
            while(!(peso(*argv[posicion]) > pesoP(top(p))) && !esParentesisDer(*argv[posicion])){
                ImpElem(top(p));
                p = pop(p);
            }
            p = push(*argv[posicion],p);
        }

        if(esParentesisIzq(*argv[posicion]))
            p = push(*argv[posicion],p);
        else if(esParentesisDer(*argv[posicion])){
            while(!esParentesisIzqP(top(p))){
                ImpElem(top(p));
                p = pop(p);
            }
        }
        posicion++;
    }
    printf("\nFinalizo");

    return 0;
}

int esOperando(char c){
    // Se utilizara "x" en lugar de "*" para la multiplicacion
    if(c != '(' && c != ')' && c != '^' && c != 'x' && c != '/' && c != '+' && c != '-')
        return 1;
    else
        return 0;
}

int esParentesisIzq(char c){
    return c == '(';
}

int esParentesisIzqP(Elem c){
    return c == '(';
}

int esParentesisDer(char c){
    return c == ')';
}

int esParentesisDerP(Elem c){
    return c == ')';
}

int peso(char c){
    if(c == '^')
        return 10;
    if(c == 'x')
        return 8;
    if(c == '/')
        return 8;
    if(c == '+')
        return 6;
    if(c == '-')
        return 6;
    if(esParentesisIzq(c))
        return 0;
}

int pesoP(Elem c){
    if(c == '^')
        return 10;
    if(c == 'x')
        return 8;
    if(c == '/')
        return 8;
    if(c == '+')
        return 6;
    if(c == '-')
        return 6;
    if(esParentesisIzqP(c))
        return 0;
}



