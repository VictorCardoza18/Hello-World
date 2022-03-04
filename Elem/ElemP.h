typedef char Elem;

int pesoP(Elem);
int esParentesisDerP(Elem);
int esParentesisIzqP(Elem);

void ImpElem(Elem e)
{
   printf("%c", e);
}

Elem LeeElem()
{
   Elem e;
   scanf("%c", &e);
   return e;
}

