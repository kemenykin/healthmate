import { useState } from "react";
import bmrService from "../services/bmrService";

const CalculateBMR = () => {

    const [gender, setGender] = useState(null);
    const [age, setAge] = useState(null);
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmr, setBmr] = useState(0);

    function handleGenderChange(e) {
        setGender(e.target.value);
    }

    function handleAgeChange(e) {
        setAge(e.target.value);
    }

    function handleHeightChange(e) {
        setHeight(e.target.value);
    }

    function handleWeightChange(e) {
        setWeight(e.target.value);
    }

    function calculateBmr(e) {
        e.preventDefault();
        if (gender === "female") {
            setBmr(bmrService.bmrForWomen(weight, height, age));
        } else {
            setBmr(bmrService.bmrForMen(weight, height, age));
        }
    }

    return (
        <div className="bmr-wrap">
            <div className="bmr-calculator">
                <p>Select gender: </p>
                <select name="gender" onChange={handleGenderChange}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                <form onSubmit={calculateBmr}>
                    <label htmlFor="weight">Age</label>
                    <input type="text" onChange={handleAgeChange} id="age" name="age" />
                    <label htmlFor="weight">Weight</label>
                    <input type="text" onChange={handleWeightChange} id="weight" name="weight" placeholder="in kilogramms" />
                    <label htmlFor="height">Height</label>
                    <input type="text" onChange={handleHeightChange} id="height" name="height" placeholder="in centimetres" />
                    <button type='submit'>Calculate</button>
                </form>
            </div>
            <div className="display-bmi">
                <h4>Your patient's BMR is: </h4>
                <p className="calculated-bmi">{bmr} kcal</p>
            </div>
        </div>
    )
}

export default CalculateBMR;