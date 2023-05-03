import { Link } from "react-router-dom";
import '../styles/navigation.css';

const Navigation = () => {
    return (
        <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/bmi'> BMI calculator</Link>
        <Link to='/daily'> Daily requirements</Link>
        <Link to='/patients'> Patients</Link>
        <Link to='/disclaimer'> Disclaimer</Link>
        </div>
    )
}

export default Navigation;