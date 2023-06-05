import '../styles/bmi.css';
import BmiCalcComp from '../components/BmiCalcComp';

const BmiCalc = () => {

    return (
        <div className='bmi-container'>
                <p>This is where you can calculate BMI.</p>
                <h4>At the Height, you have to separate the franctions of the number with DOT, NOT WITH comma. </h4>
                <br/>
            <BmiCalcComp /> 
        </div>
    )
}

export default BmiCalc;