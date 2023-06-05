import '../styles/dailyreqs.css';
import CalculateBMR from "../components/CalculateBMR";

const DailyReqs = () => {
    return (
            <div className='daily-container'>
                <p>You can make several metabolism calculations here.</p>
                <div>
                    <h3>1. Calculate BMR</h3>
                    <p>with the Harris & Benedict equation (1918)</p>
                    <CalculateBMR />
                </div>
            </div>
    )
}

export default DailyReqs;