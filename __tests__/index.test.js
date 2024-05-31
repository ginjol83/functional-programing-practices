const { rota, rango } = require('../index.js'); // Asegúrate de que este path apunta a tu archivo index.js

describe('rota', () => {
    test('rota los elementos correctamente', () => {
        expect(rota(1, [3, 2, 5, 7])).toEqual([2, 5, 7, 3]);
        expect(rota(2, [3, 2, 5, 7])).toEqual([5, 7, 3, 2]);
        expect(rota(3, [3, 2, 5, 7])).toEqual([7, 3, 2, 5]);
    });

    test('devuelve el array original si n es 0 o menor', () => {
        expect(rota(0, [3, 2, 5, 7])).toEqual([3, 2, 5, 7]);
        expect(rota(-1, [3, 2, 5, 7])).toEqual([3, 2, 5, 7]);
    });

    test('devuelve el array original si el array está vacío', () => {
        expect(rota(1, [])).toEqual([]);
    });
});

describe('rango', () => {
    test('devuelve el rango correcto', () => {
        expect(rango([3, 2, 7, 5])).toEqual([2, 7]);
    });

    test('devuelve un array vacío si el array de entrada está vacío', () => {
        expect(rango([])).toEqual([]);
    });
});