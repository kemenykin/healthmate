import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import '../styles/layout.css';
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Layout = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="main-container">
            {/* <img src="https://imagizer.imageshack.com/v2/1251x207q90/922/BGGqUV.png" width="1000px" alt="" /> */}
            <div className={`${theme}`}>
                <Navigation />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;