import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr'

describe('Pruebas de 07-deses-arr', () => { 
    test('debe retornar un arreglo con un string y un numero', () => { 

        const [letter, number] = retornaArreglo();

        expect(typeof letter).toBe('string')
        expect(typeof number).toBe('number')
        expect(letter).toBe('ABC')
        expect(number).toBe(123)
        expect( letter ).toEqual(expect.anything())
     })
 })