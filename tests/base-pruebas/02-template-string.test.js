import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string.js', () => { 

    test('getSaludo de retorna "Hola Daniel"', () => { 
        const name = 'Daniel';

        const message = getSaludo(name);

        expect( message ).toBe(`Hola ${name}`)

     })
 })