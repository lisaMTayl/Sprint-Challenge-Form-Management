import React from 'react';
import FormikRegForm from './components/RegForm';
import './App.css';

function App() {
  return (
    <div data-testid='renderedForm' className="App">
      <FormikRegForm />
      
    </div>
  );
}

export default App;
