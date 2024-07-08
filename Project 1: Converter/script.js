
document.getElementById('convertButton').addEventListener('click', function() {
    const miles = document.getElementById('milesInput').value;
    if (miles) {
        const kilometers = convertMilesToKilometers(miles);
        document.getElementById('result').textContent = `The distance of ${kilometers.toFixed(2)} kms is equal to ${miles} miles.`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid number.';
    }
});

function convertMilesToKilometers(miles) {
    const conversionFactor = 1.60934;
    return miles * conversionFactor;
}
