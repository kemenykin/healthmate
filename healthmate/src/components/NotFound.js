import { Link } from "react-router-dom";

import "../styles/notfound.css";
const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-img">
                <img src="https://imagizer.imageshack.com/img924/2271/qLjaQi.png" alt="" style={{ width: "500px" }} />
            </div>
            <div className="back-btn">
                <Link to="/"><button>Back to Home</button></Link>
            </div>
        </div>
    );
}

export default NotFound;