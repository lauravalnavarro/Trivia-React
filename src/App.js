import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes'; 
import {QuizContextProvider} from './context/QuizContext';
import Header from './components/Header';

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
	  if (isDarkMode) {
		document.body.classList.add('dark-mode');
		document.body.classList.remove('light-mode');
	  } else {
		document.body.classList.add('light-mode');
		document.body.classList.remove('dark-mode');
	  }
	}, [isDarkMode]);
  

	const toggleTheme = () => {
	  setIsDarkMode(!isDarkMode);
	};
  
  return (
    <QuizContextProvider>
	  <Header toggleTheme={toggleTheme} />
      <Router>
          <RoutesConfig /> 
      </Router>
    </QuizContextProvider>
  );
};

export default App;
