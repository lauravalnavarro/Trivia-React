import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useQuizContext } from '../context/QuizContext';
import Confetti from './ConfetiPage';

function ResultsPage() {
    const {score, questions, handleRestart} = useQuizContext();
    const navigate = useNavigate();

    const onRestart = () =>{
        handleRestart();
        navigate('/');
    }


  return (
    <div className="trivia-container">
        <div className="results-container">
            <h1 className="results-title">Results</h1>
                {
                    score + 1 === questions.length && 
                    <>
                        <h2>CONGRATULATIONS!</h2>
                            <Confetti/>
                    </>
            }
            <p className="results-score">
            You got <span className="score">{score + 1}</span> out of  {questions.length} questions correct.
            </p>
            <Button
                text="Restart" 
                onClick={onRestart} 
                className="primary-btn" 
            />
        </div>
    </div>
  );
}

export default ResultsPage;
