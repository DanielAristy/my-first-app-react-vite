import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"

describe('Prueba de 08-imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por ID', () => { 

        const id = 1;
        const heroe = getHeroeById(id);

        console.log(heroe);

        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
     })

     test('getHeroeById debe retornar undefined, si no existe el ID', () => { 

        const id = 6;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
        expect(heroe).toBeFalsy();
     })

     // Tarea
     // debe de retornar un arreglo con los heroes de DC
     // Length === 3

     // debe de retornar un arreglo con los heroes de Marvel
     // length === 2 

     test('getHeroesByOwner debe retornar los heroes de DC y longitud 3', () => { 

        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        expect(heroes).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        )
        expect(heroes.length).toBe(3)
      })

      test('getHeroesByOwner debe retornar los heroes de Marvel y longitud 2', () => { 

        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        expect(heroes).toEqual(
            [
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ]
        )

        expect(heroes.length).toBe(2)

    
      })
 })