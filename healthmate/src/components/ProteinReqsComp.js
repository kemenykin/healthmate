import '../styles/proteinreqs.css';

const ProteinReqsComp = () => {
    return (
        <div className="proteinreqs-wrap">
            <div className="proteinreqs-calculator">
                <p>Select group: </p>
                <select name="group">
                    <option value="healthy-adults">Healthy adults (18-64 years)</option>
                    <option value="healthy-elderly">Healthy elderly (&gt; 65 years)</option>
                    <option value="ill-adults">Acutely & chronically ill adults</option>
                </select>
                <div className="protein-calculator">
                    <form>
                        <label htmlFor="weight">Weight</label>
                        <input type="text" id="weight" name="weight" placeholder="in kilogramms" />
                        <button type='submit'>Calculate</button>
                    </form>
                </div>
            </div>
            <div className='display-proteinreq'>
                <h4>Your patient's protein need is: </h4>
                <p className="calculated-protein">protein g</p>
            </div>
            <div className='warning-protreq'>
                <p>The underweight body contains more protein per kg bodyweight, and so the protein requirement is underestimated if the current bodyweight is used; in the overweight body, the protein requirement is overestimated if the current bodyweight is used. In these circumstances, protein needs can preferably be expressed as recommendation per kg lean body mass (LBM).</p>
            </div>

        </div>
    )
}

export default ProteinReqsComp;