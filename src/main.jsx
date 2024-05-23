import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import CounterApp from './CounterApp.jsx'

import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App title='Daniel Aristizabal' />
    {/* <CounterApp value={10} /> */}
  </React.StrictMode>,
)
