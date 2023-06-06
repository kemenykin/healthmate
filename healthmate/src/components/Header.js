import { useContext } from 'react';
import '../styles/header.css';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <header>
            <div className="header-content">
                <div className={`header-text ${theme}`}>
                    <h1>Help in need.</h1>
                    <p>We are here and do the calculations. All you have to do is take your time &</p>
                    <h3>educate your patient.</h3>
                </div>
                <div>

                </div>
            </div>
        </header>
    )
}

export default Header;