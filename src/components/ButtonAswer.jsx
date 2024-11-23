
import '../styles/componentes/ButtonAnswer.css';

function ButtonAnswer({ answer, onAnswerSelect, isCorrect }) {
  return (
    <button
      className="answer-btn"
      onClick={() => onAnswerSelect(isCorrect)} 
    >
      {answer} 
    </button>
  );
}

export default ButtonAnswer;

