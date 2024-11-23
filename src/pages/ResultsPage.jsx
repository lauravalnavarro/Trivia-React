import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useQuizContext } from '../context/QuizContext';
import Confetti from './ConfetiPage';

function ResultsPage() {
    const {score, questions, handleRestart} = useQuizContext();
    const navigate = useNavigate();

    const onRestart = () =>{
        console.log('Restart');
        handleRestart();
        navigate('/');
    }


  return (
    <div className="trivia-container">
        <div className="results-container">
      <h1 className="results-title">Resultados</h1>
      {score + 1 === questions.length && <>
      <h2>FELICITACIONES!</h2>
        <Confetti/>
      </> }
      <p className="results-score">
        Has obtenido <span className="score">{score + 1}</span> de {questions.length} preguntas correctas.
      </p>
      <Button
        text="Volver a jugar" 
        onClick={onRestart} 
        className="primary-btn" 
      />
    </div>
    </div>
  );
}

export default ResultsPage;
