import { Link } from "react-router-dom";
import '../styles/navigation.css';
import { FaUserAlt, FaHeart, FaBars } from "react-icons/fa";

const Navigation = () => {
    return (
        <div className="header-container">
            <div className="logo-img" >
                <Link to="/"><img src="https://imagizer.imageshack.com/img924/7773/ZwosXg.png" alt="" style={{ height: "50px" }} /></Link>
            </div>
            <div className="navbar">
                <Link to='/bmi' className="navbar-links"> BMI calculator</Link>
                <Link to='/daily' className="navbar-links"> Daily requirements</Link>
                <Link to='/patients' className="navbar-links"> Patients</Link>
                <Link to='/disclaimer' className="navbar-links"> Disclaimer</Link>
            </div>
            <div className="navbar-toggle">
                <Link><FaBars /></Link>
            </div>
        </div>
    )
}

export default Navigation;