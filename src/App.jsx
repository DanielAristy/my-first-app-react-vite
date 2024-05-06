
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

export default App

App.propTypes = {
  title: PropTypes.string.isRequired
};
