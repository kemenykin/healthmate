import '../styles/dailyreqs.css';
import CalculateBMR from "../components/CalculateBMR";
import ProteinReqsComp from '../components/ProteinReqsComp';
import FluidReqs from '../components/FluidReqs';

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
            <div className='proteincalc-container'>
                <h3>2. Protein requirements</h3>
                <p>in different age and patient groups</p>
                <br />
                <ProteinReqsComp />
            </div>
            <div className='fluidreqs-container'>
                <h3>3. Fluid requirements</h3>
                <p>can be estimated: </p>
                <br />
                <FluidReqs />
            </div>
        </div>
    )
}

export default DailyReqs;