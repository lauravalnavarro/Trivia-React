import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: '¿el nene ama a la nene?',
			answerOptions: [
				{ answerText: 'Mucho', isCorrect: false },
				{ answerText: 'Muchisimo', isCorrect: false },
				{ answerText: 'demasiado', isCorrect: false },
				{ answerText: 'al infinito y mas pa alla', isCorrect: true },
			],
		},
		{
			questionText: '¿cuanto tiempo van a estan juntos los nenes?',
			answerOptions: [
				{ answerText: '3 años', isCorrect: false },
				{ answerText: 'toda la vida', isCorrect: true },
				{ answerText: '5 años', isCorrect: false },
				{ answerText: '20 años', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} / {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
