import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes'; // Importa las rutas desde aquí
import {QuizContextProvider} from './context/QuizContext';

const App = () => {
  return (
    <QuizContextProvider>
      <Router>
          <RoutesConfig /> 
      </Router>
    </QuizContextProvider>
  );
};

export default App;
