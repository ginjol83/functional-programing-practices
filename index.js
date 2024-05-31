//Ejercicio 1.1.1. Definir la función media3 tal que (media3 x y z) es la media aritmética de los números x, y y z.

const media3 = (x,y,z) => (x+y+z)/3

/* 
    Ejercicio 1.2.1. Definir la función sumaMonedas tal que (sumaMonedas a b c d e) es la suma de los euros 
    correspondientes a a monedas de 1 euro, b de 2 euros, c de 5 euros, d 10 euros y e de 20 euros.
*/

const sumaMonedas = (a,b,c,d,e) => a*1+b*2+c*5+d*10+e*20


/*
    Ejercicio 1.3.1. Definir la función volumenEsfera tal que (volumenEsfera r) es el volumen de la esfera de radio r. Por ejemplo,
    volumenEsfera 10 == 4188.790204786391
    Indicación: Usar la constante pi
*/

const volumenEsfera = (r) => (4/3)*Math.PI* Math.pow(r,3)

/*
    1.4. Área de una corona circular
    Ejercicio 1.4.1. Definir la función areaDeCoronaCircular tal que (areaDeCoronaCircular r1 r2)
    es el área de una corona circular de radio interior r1 y radio exterior r2 (pi*(r2^2 -r1^2)). Por ejemplo,
    areaDeCoronaCircular 1 2 == 9.42477796076938
    areaDeCoronaCircular 2 5 == 65.97344572538566
    areaDeCoronaCircular 3 5 == 50.26548245743669
*/

const areaDeCoronaCircular = (r1,r2) =>  Math.PI*(Math.pow(r2,2)-Math.pow(r1,2))

/*
    Ejercicio 1.5.1. Definir la función ultimaCifra tal que (ultimaCifra x) es la última cifra
    del número x. Por ejemplo,
    ultimaCifra 325 == 5
*/

const ultimaCifra = (x) => Math.abs(x%10)

/*
    Ejercicio 1.6.1. Definir la función maxTres tal que (maxTres x y z) es el máximo de x, y y
    z. Por ejemplo,

    maxTres 6 2 4 == 6
    maxTres 6 7 4 == 7
    maxTres 6 7 9 == 9
*/
const maxTres = (x,y,z) => Math.max(x,y,z)

/*
Ejercicio 1.7.1. Definir la función xor1 que calcule la disyunción excluyente a partir de la tabla
de verdad. Usar 4 ecuaciones, una por cada línea de la tabla.
*/

const xor1 = (bol1, bol2) =>{
    if ( !bol1  && !bol2 ) { return false }
    if (  bol1  &&  bol2 ) { return false }
    if ( !bol1  &&  bol2 ) { return true  }
    if (  bol1  && !bol2 ) { return true  }
}

/*
Ejercicio 1.7.2. Definir la función xor2 que calcule la disyunción excluyente a partir de la tabla
de verdad y patrones. Usar 2 ecuaciones, una por cada valor del primer argumento.
*/

const xor2 = ( bol1 , bol2 ) =>
    ( !bol1  && !bol2 ) 
        ? false 
        : (  bol1  &&  bol2 ) 
            ? false 
            : true


/* 
    Ejercicio 1.7.3. Definir la función xor3 que calcule la disyunción excluyente a partir de la
    disyunción (||), conjunción (&&) y negación (not). Usar 1 ecuación.
 */
const xor3 = (bol1, bol2) => !bol1 && !bol2 || bol1 && bol2 ? false : true


/* 
    Ejercicio 1.7.4. Definir la función xor4 que calcule la disyunción excluyente a partir de desigualdad (!=). Usar 1 ecuación.
*/

const xor4 = (bol1, bol2) => bol1 != bol2

/*
    Ejercicio 1.8.1. Definir la función rota1 tal que (rota1 xs) es la lista obtenida poniendo el primer elemento de xs al final de la lista. 
    Por ejemplo, rota1 [3,2,5,7] == [2,5,7,3]
*/

const rota1 = (xs) => {
    if (xs.length === 0) {//
      return xs; 
    }

    const [firstElement, ...restOfElements] = xs;
    return [...restOfElements, firstElement];
  }

/*
    Ejercicio 1.8.2. Definir la función rota tal que (rota n xs) es la lista obtenida poniendo los
    n primeros elementos de xs al final de la lista. Por ejemplo,

    rota 1 [3,2,5,7] == [2,5,7,3]
    rota 2 [3,2,5,7] == [5,7,3,2]
    rota 3 [3,2,5,7] == [7,3,2,5]
*/

const rota = (n, xs) => {
    if (xs.length === 0) {
      return xs;
    }

    const elementsToMove = xs.slice(0, n);
    const restOfElements = xs.slice(n);
    return [...restOfElements, ...elementsToMove];
}

/*
    Ejercicio 1.9.1. Definir la función rango tal que (rango xs) es la lista formada por el menor
    y mayor elemento de xs. Por ejemplo,
    rango [3,2,7,5] == [2,7]
    Indicación: Se pueden usar minimum y maximum.
*/

export{ media3, sumaMonedas, volumenEsfera, areaDeCoronaCircular, ultimaCifra, maxTres, xor1, xor2, xor3, xor4, rota1, rota }
