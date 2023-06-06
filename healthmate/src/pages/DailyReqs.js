import '../styles/dailyreqs.css';
import CalculateBMR from "../components/CalculateBMR";

const DailyReqs = () => {
    return (
            <div className='daily-container'>
                <div className='bmr-calc-container'>
                    <h3>1. Calculate BMR</h3>
                    <p>with the Harris & Benedict equation (1918)</p>
                    <br />
                    <CalculateBMR />
                    <br />
                </div>
            </div>
    )
}

export default DailyReqs;