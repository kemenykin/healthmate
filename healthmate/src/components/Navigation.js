import { Link } from "react-router-dom";
import '../styles/navigation.css';
import { FaUserAlt, FaHeart } from "react-icons/fa";

const Navigation = () => {
    return (
        <div className="header-container">
            <div className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/bmi'> BMI calculator</Link>
                <Link to='/daily'> Daily requirements</Link>
                <Link to='/patients'> Patients</Link>
                <Link to='/disclaimer'> Disclaimer</Link>
            </div>
            <div className="nav-icons">
                <Link to="#"><FaUserAlt /></Link>
                <Link to="#"><FaHeart /></Link>
            </div>
        </div>
    )
}

export default Navigation;