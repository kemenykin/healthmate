import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import '../styles/layout.css';
import '../styles/navigation.css';
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Footer from "./Footer";
import ScrollUpButton from "react-scroll-up-button";

const Layout = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="main-container">
            <div className={`${theme}`}>
                <nav>
                    <Navigation />
                </nav>
                <main>
                    <Outlet />
                    <ScrollUpButton />
                </main>
                    <Footer />
            </div>
        </div>
    )
}

export default Layout;