import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  const fetchQuestions = async (language = 'en') => {
    try {
      const { data } = await axios.get('https://opentdb.com/api.php', {
        params: {
          amount: 10, 
          type: 'multiple', 
          lang: language, 
        },
      });
  
      const formattedQuestions = data.results.map(({incorrect_answers, correct_answer, question}) => {
        const incorrectAnswers = incorrect_answers.map((answer) => ({
          answerText: answer,
          isCorrect: false,
        }));
        const correctAnswer = {
          answerText: correct_answer,
          isCorrect: true,
        };
        console.log(correctAnswer);
  
        return {
          questionText: question,
          answerOptions: [...incorrectAnswers, correctAnswer].sort(() => Math.random() - 0.5),
        };
      });
  
      setQuestions(formattedQuestions);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };
  

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    isCorrect && setScore((prev)=>prev + 1);
    const nextQuestion = currentQuestion + 1;
    nextQuestion < questions.length && setCurrentQuestion(nextQuestion);

  };

  const handleRestart = () =>{
    setScore(0);
    setCurrentQuestion(0);
    setQuestions([]);
    fetchQuestions();
  }

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        score,
        handleAnswerOptionClick,
        questions,
        isLoading,
        handleRestart
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useQuizContext = () => {
  return useContext(QuizContext);
};
