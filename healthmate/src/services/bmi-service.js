const calculateBmi = (weight, height) => {
    const bmi = weight / (height * height); 
    
    return Number(bmi.toFixed(2));
}

export default calculateBmi;