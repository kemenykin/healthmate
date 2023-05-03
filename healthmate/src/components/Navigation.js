import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <h2>Menu</h2>
        <Link to='/'>Homepage</Link>
        <Link to='/bmi'>BMI calculator</Link>
        <Link to='/energy'>Energy calculator</Link>
        <Link to='/disclaimer'>Disclaimer</Link>
        </>
    )
}

export default Navigation;