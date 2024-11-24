import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


function Header({ toggleTheme }) {
    return (
        <header>
          <button onClick={toggleTheme} className="theme-toggle-btn">
            <FontAwesomeIcon icon={faSun} style={{ display: 'none' }} />
            <FontAwesomeIcon icon={faMoon} style={{ display: 'block' }} />
          </button>
        </header>
      );
}

export default Header;
