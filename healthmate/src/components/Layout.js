import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
    return (
        <div>
        <h2>HealthMate - simplify your clinical work</h2>
        <Navigation />
        <Outlet />

        </div>
    )
}

export default Layout;