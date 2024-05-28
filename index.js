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

console.log(ultimaCifra(8965))