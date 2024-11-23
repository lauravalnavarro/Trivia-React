import { useQuizContext } from '../context/QuizContext';
import Question from '../components/Question';
import { useNavigate } from 'react-router-dom';


export default function QuizPage() {
    const {questions, handleAnswerOptionClick, currentQuestion} = useQuizContext();
    const navigate = useNavigate();

    const handleQuestion = (props) => {
        if(currentQuestion === questions.length - 1){
            navigate('/results')
        }else{
            handleAnswerOptionClick(props);
        }
    }


	return (
        <div className="trivia-container">
            {
                questions.length !== 0 && 
            <>
          <div className="question-section">
            <div className="question-count">
              <span>Pregunta {currentQuestion + 1}</span>/{questions.length}
            </div>
          </div>
    
          <Question
            question={questions[currentQuestion].questionText}
            answers={questions[currentQuestion].answerOptions}
            onAnswerSelect={handleQuestion}
          />
            </>
            }
        </div>
      );
    };

