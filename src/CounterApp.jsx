import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({value}) => {
    const [ count, setCount ] = useState(value);

    const handleAdd = () => setCount( count + 1 );

    const handleSubstract = () => setCount( count - 1 );

    const handleReset = () => setCount(value);
    
  return (
    <>
        <h1>CounterApp {count}</h1>
        <button type="button" onClick={ handleAdd }>+</button>
        <button type="button" onClick={ handleSubstract }>-</button>
        <button type="button" onClick={ handleReset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
  };

export default CounterApp;