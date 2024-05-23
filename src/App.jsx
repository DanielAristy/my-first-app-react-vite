
import PropTypes from 'prop-types';


const newMensaje = 'React + Vite';

const objeto = {
  titulo: 'Hola mundo',
  mensaje: 'que mas pues '
}

//defaultProps correccion ***
const App = ({title = 'Hola mundo'}) => {
  return (
    <>
      <code>{JSON.stringify(objeto)}</code>
      <p>Esto es un parrafo</p>
    </>
  )
}



App.propTypes = {
  title: PropTypes.string.isRequired
};

// Ya no se utliza de esta manera correccion ***
// App.defaultProps = {
//   title: 'Hola mundo'
// }


export default App;