import '../styles/bmi.css';
import calculateBmi from '../services/bmi-service';
import { useState } from 'react';

const BmiCalc = () => {

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
        if (isNaN(weight) || isNaN(height)) {
            alert("Inputs have to be numbers!")
        } else {
            setBmi(calculateBmi(weight, height))
        }

        console.log("calculate");
    }

    return (
        <div>
            <div><h3>BMI calculator</h3>
                <p>This is where you can calculate BMI.</p>
                <h4>At the Height, you have to separate the franctions of the number with DOT, NOT WITH comma. </h4>
            </div>
            <form onSubmit={calculate}>
                <label htmlFor="weight">Weight</label>
                <input type="text" value={weight} onChange={handleWeightChange} id="weight" name="weight" placeholder="in kilogramms" />
                <label htmlFor="height">Height</label>
                <input type="text" value={height} onChange={handleHeightChange} id="height" name="height" placeholder="in metres" />
                <button type='submit'>Calculate</button>
            </form>
            <div className="display-bmi">
                <h4>Your patient's Body Mass Index is: </h4>
                <p className="calculated-bmi">{bmi}</p>
            </div>
            <div>
                <p>Weight and height are used to calculate the BMI, which is used to classify subject as underweight, normal weight, overweight or obese. The table below provides the WHO cutoff points for adults.</p>
            </div>
            <div className="bmi-table">
                <img src="https://www.ncbi.nlm.nih.gov/books/NBK551660/bin/bmi__WHO.jpg" width="400px" alt='' />
            </div>
        </div>
    )
}

export default BmiCalc;