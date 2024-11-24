import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
    const navigate = useNavigate();

    const onStart = () => {
        navigate('/quiz');
      };


  return (
    <div className="trivia-container">
      <h1 className="home-title">
        <span className="letter" style={{ color: '#FF5733' }}>T</span>
        <span className="letter" style={{ color: '#006A67' }}>R</span>
        <span className="letter" style={{ color: '#3357FF' }}>I</span>
        <span className="letter" style={{ color: '#F033FF' }}>V</span>
        <span className="letter" style={{ color: '#FF33A1' }}>I</span>
        <span className="letter" style={{ color: '#FF9633' }}>A</span>
      </h1>
      <div className="home-description">
      <p>
            Test your knowledge with interesting and fun questions.
        </p>
        <p>Are you ready for the challenge? 🍀</p>
      </div>
      <Button
        text="Start 🚀" 
        onClick={onStart} 
        className="primary-btn" 
      />
    </div>
  );
};

export default HomePage;
