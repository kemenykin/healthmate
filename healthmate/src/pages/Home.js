import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Header from "../components/Header";
import '../styles/home.css';

const Home = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    function handleChange(e) {
        setTheme(e.target.value);
    }


    return (
        <div>
            <header>
                <Header />
            </header>
            <div className="home-intro">
                <p>Welcome to our app! </p>
                <p>...a friendly tool for clinical dietitians.</p>
            </div>
            <div>
                <h4>Select mode: </h4>
                <select name="theme" onChange={handleChange}>
                    <option value="light">light</option>
                    <option value="dark">dark</option>
                </select>
            </div>
        </div>
    )
}

export default Home;