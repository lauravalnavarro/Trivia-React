import React from 'react';
import ButtonAnswer from './ButtonAswer';

function Question({ question, answers, onAnswerSelect }) {
  return (
    <div className="question-container">
      <h2 className="question-text">{question}</h2>
      <div className="answer-options">
        {answers.map(({answerText, isCorrect}, index) => (
            <ButtonAnswer
            key={index}
            index = {index}
            onAnswerSelect={ onAnswerSelect}
            answer={answerText}
            isCorrect={isCorrect}
            />
          
        ))}
      </div>
    </div>
  );
}

export default Question;
