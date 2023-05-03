import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import '../styles/layout.css';

const Layout = () => {
    return (
        <div className="main-container">
        <img src="https://imagizer.imageshack.com/v2/1251x207q90/922/BGGqUV.png" width="1000px" alt=""/>
        <Navigation />

        <Outlet />
        </div>
    )
}

export default Layout;