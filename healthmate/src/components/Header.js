import { useContext } from 'react';
import '../styles/header.css';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {

    // const { theme } = useContext(ThemeContext);

    return (
        <header>
            <div className="header-content">
                <div className="header-text">
                    <h1>Help in need.</h1>
                    <div className='text-div'>We are here and do the calculations. All you have to do is
                    take your time & <b>educate your patient.</b></div>
                </div>
                <div>

                </div>
            </div>
        </header>
    )
}

export default Header;