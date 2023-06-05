import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import '../styles/layout.css';
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Footer from "./Footer";

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
                </main>
                    <Footer />
            </div>
        </div>
    )
}

export default Layout;