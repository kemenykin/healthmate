import { useState, useEffect } from "react";
import fluidService from "../services/fluidService";

const FluidReqs = () => {

    const [weight, setWeight] = useState('');
    const [fluid, setFluid] = useState(35);
    // const [age, setAge] = useState("adults");
    const [estimatedFluid, setEstimatedFluid] = useState(0);

    function handleWeightChange(e) {
        setWeight(e.target.value);
    }

    function calculateFluidNeed(e) {
        e.preventDefault();
        // if (age === "adults") {
        //     setFluid(35);
        // } else {
        //     setFluid(30);
        // }
        setEstimatedFluid(fluidService.estimateFluid(weight, fluid));
    }

    return (
        <div className="proteinreqs-wrap">
            <div className="proteinreqs-calculator">
                {/* <p className='select-field'>Select group: </p>
                <select name="group">
                    <option value="adults">Adults (18-64 years)</option>
                    <option value="older-adults">Adults (&gt; 60 years)</option>
                </select> */}
                <div className="protein-calculator">
                    <form onSubmit={calculateFluidNeed}>
                        <label htmlFor="weight">Weight</label>
                        <input type="text" onChange={handleWeightChange} id="weight" name="weight" placeholder="in kilogramms" />
                        <button type='submit'>Calculate</button>
                    </form>
                </div>
            </div>
            <div className='display-proteinreq'>
                <h4>Your patient's estimated fluid need is: </h4>
                <p className="calculated-protein">{estimatedFluid} ml/day</p>
            </div>
        </div>
    )
}

export default FluidReqs;