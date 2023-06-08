import '../styles/dailyreqs.css';
import CalculateBMR from "../components/CalculateBMR";
import ProteinReqsComp from '../components/ProteinReqsComp';
import FluidReqs from '../components/FluidReqs';

const DailyReqs = () => {
    return (
        <div className='daily-container'>
            <div className='bmr-calc-container'>
                <div className='intro-box'>
                    <h3>1. Calculate BMR</h3>
                    <p>with the Harris & Benedict equation (1918)</p>
                </div>
                <br />
                <CalculateBMR />
                <br />
            </div>
            <div className='proteincalc-container'>
                <div className='intro-box'>
                    <h3>2. Protein requirements</h3>
                    <p>in different age and patient groups</p>
                </div>
                <br />
                <ProteinReqsComp />
            </div>
            <div className='fluidreqs-container'>
                <div className='intro-box'>
                    <h3>3. Fluid requirements</h3>
                    <p>can be estimated: </p>
                </div>
                <br />
                <FluidReqs />
            </div>
        </div>
    )
}

export default DailyReqs;