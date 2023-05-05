const calculateBmi = (weight, height) => {
    return ((weight / (height * height)).toFixed(2));
}

export default calculateBmi;