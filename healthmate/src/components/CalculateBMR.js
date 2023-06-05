const CalculateBMR = () => {
    return (
        <div className="bmr-wrap">
            <div className="bmr-calculator">
                <form>
                    <label htmlFor="weight">Age</label>
                    <input type="text" id="age" name="age" />
                    <label htmlFor="weight">Weight</label>
                    <input type="text" id="weight" name="weight" placeholder="in kilogramms" />
                    <label htmlFor="height">Height</label>
                    <input type="text" id="height" name="height" placeholder="in metres" />
                    <button type='submit'>Calculate</button>
                </form>
            </div>
            <div className="display-bmi">
                <h4>Your patient's BMR is: </h4>
                <p className="calculated-bmi">BMR</p>
            </div>
        </div>
    )
}

export default CalculateBMR;