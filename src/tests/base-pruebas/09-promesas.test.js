import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";


describe('Preubas en 09-promesas', () => { 

    test('getHeroeByIdAsync debe retornar un heroe con async y await', async () => { 
        const id = 1;

        const heroe = await getHeroeByIdAsync(id);

        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

     })

     test('getHeroeByIdAsync debe retornar un heroe, con ayuda de Jest con el metodo done', (done) => { 
        const id = 1;

        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
            done();
        })

     })

     test('getHeroeByIdAsync debe retornar un throw: "No se pudo encontrar el héroe", con ayuda de Jest con el metodo done', (done) => { 
        const id = 20;

        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe')
            done();
        })
     })
 })