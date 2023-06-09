import '../styles/bmi.css';
import calculateBmi from '../services/bmi-service';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BmiCalcComp = () => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(0);

    const handleWeightChange = (e) => {
        setWeight((e.target.value));
    }

    const handleHeightChange = (e) => {
        setHeight((e.target.value));
    }

    const calculate = (e) => {
        e.preventDefault();
        
        if (height === "" || weight === "") {
            toast.error("Input fields cannot be empty!", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        if (isNaN(weight) || isNaN(height)) {
            toast.error("Inputs have to be numbers!", {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            setBmi(calculateBmi(weight, height))
        }
    }

    return (
            <div className='bmi-wrap'>
                <div className='bmi-calculator'>
                    <form onSubmit={calculate}>
                        <label htmlFor="weight">Weight</label>
                        <input type="text" value={weight} onChange={handleWeightChange} id="weight" name="weight" placeholder="in kilogramms" />
                        <label htmlFor="height">Height</label>
                        <input type="text" value={height} onChange={handleHeightChange} id="height" name="height" placeholder="in metres" />
                        <button type='submit'>Calculate</button>
                    </form>
                </div>
                <div className="display-bmi">
                    <h4>Your patient's Body Mass Index is: </h4>
                    <p className="calculated-bmi">{bmi} kg/m2</p>
                </div>
                <div className='classification-bmi'>
                    <p>Weight and height are used to calculate the BMI, which is used to classify subject as underweight, normal weight, overweight or obese.</p>
                    <p>The table below provides the WHO cutoff points for adults.</p>
                </div>
                <div className="bmi-table">
                    <img src="https://www.ncbi.nlm.nih.gov/books/NBK551660/bin/bmi__WHO.jpg" width="400px" alt='' />
                </div>
            </div>
    )
}

export default BmiCalcComp;