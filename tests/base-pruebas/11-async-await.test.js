import { getImagen } from '../../src/base-pruebas/11-async-await';


describe('Prueba 11-async-await', () => { 

    test('getImagen obtener la URL de giphy', async () => { 

        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string')
     })
 })