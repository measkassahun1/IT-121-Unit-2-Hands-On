document.getElementById('calculateButton').addEventListener('click', function() {
    const heightInches = document.getElementById('heightInput').value;
    const weightPounds = document.getElementById('weightInput').value;

    if (heightInches && weightPounds) {
        const heightCm = convertInchesToCm(heightInches);
        const weightKg = convertPoundsToKg(weightPounds);
        const bmi = calculateBMI(heightCm, weightKg);

        document.getElementById('result').textContent = `Height: ${heightCm.toFixed(2)} cm, Weight: ${weightKg.toFixed(2)} kg, BMI: ${bmi.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers for height and weight.';
    }
});

function convertInchesToCm(inches) {
    const cmPerInch = 2.54;
    return inches * cmPerInch;
}

function convertPoundsToKg(pounds) {
    const kgPerPound = 0.453592;
    return pounds * kgPerPound;
}

function calculateBMI(heightCm, weightKg) {
    const heightM = heightCm / 100;
    return weightKg / (heightM * heightM);
}
