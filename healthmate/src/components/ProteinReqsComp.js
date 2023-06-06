import { useState } from 'react';
import '../styles/proteinreqs.css';
import proteinReqsService from '../services/proteinReqsService';
import { useEffect } from 'react';

const ProteinReqsComp = () => {

    const [proteinAmount, setProteinAmount] = useState(0.8);
    const [group, setGroup] = useState("healthy-adults");
    const [weight, setWeight] = useState('');
    const [calculatedProtein, setCalculatedProtein] = useState(0);

    useEffect(() => {
        setCalculatedProtein(proteinReqsService.calcProteinNeed(weight, proteinAmount));
    }, [proteinAmount, weight]);

    function handleGroupChange(e) {
        const selectedGroup = e.target.value;

        setGroup(selectedGroup);
        if (selectedGroup === "healthy-adults") {
            setProteinAmount(0.8);
        } else if (selectedGroup === "healthy-elderly") {
            setProteinAmount(1.1);
        } else {
            setProteinAmount(1.4);
        }
    }

    function handleWeightChange(e) {
        setWeight(e.target.value);
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        calculateProteinNeeds();
    }

    function calculateProteinNeeds() {
        setCalculatedProtein(proteinReqsService.calcProteinNeed(weight, proteinAmount))
    }

    return (
        <div className="proteinreqs-wrap">
            <div className="proteinreqs-calculator">
                <p className='select-field'>Select group: </p>
                <select name="group" onChange={handleGroupChange}>
                    <option value="healthy-adults">Healthy adults (18-64 years)</option>
                    <option value="healthy-elderly">Healthy elderly (&gt; 65 years)</option>
                    <option value="ill-adults">Acutely & chronically ill adults</option>
                </select>
                <div className="protein-calculator">
                    <form onSubmit={handleOnSubmit}>
                        <label htmlFor="weight">Weight</label>
                        <input type="text" id="weight" name="weight" placeholder="in kilogramms" onChange={handleWeightChange} />
                        <button type='submit'>Calculate</button>
                    </form>
                </div>
            </div>
            <div className='display-proteinreq'>
                <h4>Your patient's protein need is: </h4>
                <p className="calculated-protein">{calculatedProtein} g</p>
            </div>
            <div className='warning-protreq'>
                <p>The underweight body contains more protein per kg bodyweight, and so the protein requirement is underestimated if the current bodyweight is used; in the overweight body, the protein requirement is overestimated if the current bodyweight is used. In these circumstances, protein needs can preferably be expressed as recommendation per kg lean body mass (LBM).</p>
            </div>

        </div>
    )
}

export default ProteinReqsComp;