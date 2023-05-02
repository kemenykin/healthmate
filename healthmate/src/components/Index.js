import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/index.css';

const Index = () => {
    return (
        <>
            <nav>
                <ul className="navbar">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/disclaimer'>Disclaimer</Link></li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Index;