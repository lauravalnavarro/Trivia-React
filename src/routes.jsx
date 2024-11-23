import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import { useQuizContext } from './context/QuizContext';
import LoadingPage from './pages/LoadingPage';

const RoutesConfig = () => {
 const { questions } = useQuizContext(); 

 if (questions.length === 0) {
    return (
      <LoadingPage/>
    );
  }

 return <Routes>
    <Route path="/" element={<HomePage />} />
    {questions.length !== 0 && <Route path="/quiz" element={<QuizPage />} />}
    <Route path="/results" element={<ResultsPage />} />
    <Route path="/*" element={<Navigate to="/" replace />} />
  </Routes>
};

export default RoutesConfig;
