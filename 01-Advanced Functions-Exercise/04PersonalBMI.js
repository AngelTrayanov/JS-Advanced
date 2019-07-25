function solve(name, age, weight, height) { //weight in kg, height in cm
    let personBMI = {
        name,
        personalInfo: {
            age,
            weight,
            height
        } 
    };
    let bmi = Math.round(weight/(Math.pow(height/100, 2)));
    personBMI['BMI'] = bmi;
    
    if (bmi < 18.5) {
        personBMI['status'] = 'underweight';
    } else if (bmi < 25) {
        personBMI['status'] = 'normal';
    } else if (bmi < 30) {
        personBMI['status'] = 'overweight';
    } else {
        personBMI['status'] = 'obese';
        personBMI['recommendation'] = 'admission required';
    }
    console.log(personBMI);
    return personBMI;
}

solve('Peter', 30, 86, 188);
solve('Honey Boo Boo', 9, 57, 137);