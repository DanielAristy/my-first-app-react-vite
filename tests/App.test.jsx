import { render } from "@testing-library/react"
import App from "../src/App"

describe('Pruebas en <App />', () => {
    test('debe hacer match con el snapshot', () => {
        const title = 'Daniel Aristizabal';
        const { container } = render(<App title={title} />);
        
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el titulo en un H1', () => {
        const title = 'Daniel Aristizabal';
        const { container, getByText } = render(<App title={title} />);

        expect( getByText(title) ).toBeTruthy();
        const h1 = container.querySelector('h1');

        expect(h1.innerHTML).toContain( title )
    })
})