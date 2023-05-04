import React from 'react';
import './App.css';
import { Hello  } from './components/Hello';
import {Form} from './components/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello firstName='Aaron' lastName='Agosto'/>
        <Form/>
      </header>
    </div>
  );
}

export default App;
