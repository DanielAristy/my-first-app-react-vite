
import PropTypes from 'prop-types';


const newMensaje = 'Daniel Aristizabal';
const objeto = {
  titulo: 'Hola mundo',
  mensaje: 'que mas pues '
}

const App = ({title}) => {
  return (
    <>
      <h1>{title} {newMensaje}</h1>
      <code>{JSON.stringify(objeto)}</code>
      <p>Esto es un parrafo</p>
    </>
  )
}



App.propTypes = {
  title: PropTypes.string.isRequired
};

App.defaultProps = {
  title: 'Hola mundo'
}


export default App;