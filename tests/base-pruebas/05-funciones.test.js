import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones'


describe('Pruebas en 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        //expect( user ).toStrictEqual(testUser);
        expect( user ).toEqual(testUser);
     })

     test('getUsuarioActivo debe retornar un objeto', () => { 
        const name = 'Daniel'
        //const testObject = {
        //    uid: 'ABC567',
        //    username: name
        //}

        const activeUser = getUsuarioActivo(name)

        //expect( activeUser ).toEqual( testObject )
        expect( activeUser ).toStrictEqual({
            uid: 'ABC567',
            username: name
        })

      })
 })