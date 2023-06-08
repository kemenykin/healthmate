import '../styles/disclaimer.css';

const Disclaimer = () => {
    return (
        <div className='disclaimer-wrap'>
            <div className='disclaimer'>
                <div>
                    <img src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='description'>
                    <h4>Keep in mind:</h4>
                    <p>These calculations are based on general formulas and may not be accurate for everyone. For example, the formula for calculating daily calorie needs is based on average values and doesn't take into account factors such as individual metabolism, activity level, and body composition. So it provides some information, but because of the of the limitations of these calculations we encourage you to consult with a healthcare professional or registered dietitian for personalized advice.</p>
                <br />
                </div>

            </div>
        </div>
    )
}

export default Disclaimer;