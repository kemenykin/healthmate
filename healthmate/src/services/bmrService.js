const bmrForMen = (weight, height, age) => {
    return (13.8 * weight + 5.0 * height - 6.8 * age + 66.5); 
}

const bmrForWomen = (weight, height, age) => {
    return (9.6 * weight + 1.8 * height - 4.7 * age + 655.1);
}

export default {
    bmrForMen,
    bmrForWomen
}