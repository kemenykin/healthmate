import '../styles/dailyreqs.css';
import CalculateBMR from "../components/CalculateBMR";

const DailyReqs = () => {
    return (
            <div className='daily-container'>
                <p>This page is for calculate your daily needs eg. protein requirements, fluid intake etc.</p>
                <div>
                    <h3>Calculate BMR</h3>
                    <CalculateBMR />
                </div>
            </div>
    )
}

export default DailyReqs;