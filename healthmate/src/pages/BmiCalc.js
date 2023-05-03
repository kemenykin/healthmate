import '../styles/bmi.css';

const BmiCalc = () => {
    return (
        <div>
            <div><h3>BMI calculator</h3>
                <p>This is where you can calculate BMI.</p>
            </div>
            <form>
                <label for="weight">Weight</label>
                <input type="text" id="weight" name="weight" placeholder="in kilogramms" />
                <label for="height">Height</label>
                <input type="text" id="height" name="height" placeholder="in metres" />
            </form>
            <div className="display-bmi">
                <h4>Your patient's Body Mass Index is: </h4>
                <p>Number's place</p>
            </div>
            <div>
                <p>Weight and height are used to calculate the BMI, which is used to classify subject as underweight, normal weight, overweight or obese. The table below provides the WHO cutoff points for adults.</p>
            </div>
            <div className="bmi-table">
                <img src="https://www.ncbi.nlm.nih.gov/books/NBK551660/bin/bmi__WHO.jpg" width="400px"/>
            </div>
        </div>
    )
}

export default BmiCalc;