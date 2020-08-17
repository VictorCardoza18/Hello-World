function Ejercicio2() {
  let matriz1 = [
    [10, 20, 12, 43],
    [23, 43, 98, 37],
    [56, 11, 12, 19],
    [67, 69, 77, 17],
  ];
  let matriz2 = [
    [13, 29, 22, 13],
    [29, 41, 28, 17],
    [59, 10, 68, 29],
    [19, 12, 17, 11],
  ];

  let matriz_Resultado = [[], [], [], []];

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
      matriz_Resultado[j][i] =
        matriz1[j][0] * matriz2[0][i] +
        matriz1[j][1] * matriz2[1][i] +
        matriz1[j][2] * matriz2[2][i] +
        matriz1[j][3] * matriz2[3][i];
    }
  }

  let display_Matriz1 = [];
  let display_Matriz2 = [];
  let display_Matriz_Resultado = [];

  for (let i = 0; i < 4; i++) {
    display_Matriz1 += "[ " + matriz1[i] + " ]" + "<br>";
    display_Matriz2 += "[ " + matriz2[i] + " ]" + "<br>";
    display_Matriz_Resultado += "[ " + matriz_Resultado[i] + " ]" + "<br>";
  }

  $(".Matriz1").append(display_Matriz1);
  $(".Matriz2").append(display_Matriz2);
  $(".Ejercicio_2_Respuesta").append(display_Matriz_Resultado);
}

function Ejercicio1() {
  let arreglo = [100, 48, 21, 67, 12, 35, 51, 92];
  let arreglo_Desordenado = $(".Arreglo_Desordenado");
  let arreglo_Ordenado = $(".Arreglo_Ordenado");
  let txt_Arreglo_Desordenado = "";
  let txt_Arreglo_Ordenado = "";

  for (let i = 0; i < arreglo.length; i++) {
    txt_Arreglo_Desordenado += arreglo[i] + ", ";
  }

  arreglo_Desordenado.append(
    "[ " +
      txt_Arreglo_Desordenado.substring(0, txt_Arreglo_Desordenado.length - 2) +
      " ]"
  );

  for (let j = 0; j < arreglo.length; j++) {
    for (let i = 0; i < arreglo.length - j; i++) {
      if (arreglo[i] > arreglo[i + 1]) {
        Cambia_Posicion(arreglo, i, i + 1);
      }
    }
  }

  for (let i = 0; i < arreglo.length; i++) {
    txt_Arreglo_Ordenado += arreglo[i] + ", ";
  }

  arreglo_Ordenado.append(
    "[ " +
      txt_Arreglo_Ordenado.substring(0, txt_Arreglo_Desordenado.length - 2) +
      " ]"
  );
}

function Cambia_Posicion(array, posicion1, posicion2) {
  let arrayTemporal = [];
  arrayTemporal[0] = array[posicion1];
  array[posicion1] = array[posicion2];
  array[posicion2] = arrayTemporal[0];
}

function Iniciar() {
  Ejercicio2();
  Ejercicio1();
}

$(document).ready(Iniciar);
