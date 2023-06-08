import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Header from "../components/Header";
import '../styles/home.css';

const Home = () => {

    // const { theme, setTheme } = useContext(ThemeContext);

    // function handleChange(e) {
    //     setTheme(e.target.value);
    // }

    return (
        <div>
            <header>
                <Header />
            </header>
            <body>
                <div className="home-intro">
                        <img className="home-img" src="https://images.pexels.com/photos/7994445/pexels-photo-7994445.jpeg" alt="" style={{ width: "18.75rem" }} />
                    <div className="intro-text">
                        <h2>Welcome to our app! </h2>
                        <p>Can you imagine that you can do your real job and spend more useful time with educating your patients instead of the unnecessary calculations and stress?</p>
                        <p>We brought the solution: everything you need. In one place. In your pocket.</p>
                        <h3>This is HealthMate.</h3>
                        <p>...a friendly tool for clinical dietitians.</p>
                    </div>
                </div>
                {/* <div>
                    <h4>Select mode: </h4>
                    <select name="theme" onChange={handleChange}>
                        <option value="light">light</option>
                        <option value="dark">dark</option>
                    </select>
                </div> */}
            </body>
        </div>
    )
}

export default Home;