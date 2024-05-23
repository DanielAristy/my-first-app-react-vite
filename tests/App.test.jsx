import { render } from "@testing-library/react"
import App from "../src/App"

describe('Pruebas en <App />', () => {

    // test('debe hacer match con el snapshot', () => {
    //     const title = 'Daniel Aristizabal';
    //     const { container } = render(<App title={title} />);
        
    //     expect(container).toMatchSnapshot();
    // });

    test('debe de mostrar el titulo enviado por props', () => {
        const title = 'Daniel Aristizabal';
        const { getByText } = render(<App title={title} />);
        expect( getByText(title) ).toBeTruthy();
    });

    test('debe de mostrar el titulo en un H1', () => {
        const title = 'Daniel Aristizabal';
        const { getByTestId } = render(<App title={title} />);

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('debe mostrar dos parrafos con la misma descripcion', () => {
        const title = 'Daniel Aristizabal';
        const parrafo = 'Esto es un parrafo';
        const { getAllByText } = render(<App title={title} />);

        expect( getAllByText(parrafo).length).toBe(2)
    })

})