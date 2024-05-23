import { render } from "@testing-library/react"
import App from "../src/App"

describe('Pruebas en <App />', () => {
    test('debe hacer match con el snapshot', () => {
        const title = 'Daniel Aristizabal';
        const { container } = render(<App title={title} />);
        
        expect(container).toMatchSnapshot();
    })
})