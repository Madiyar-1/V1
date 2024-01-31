function calculatePrice(category) {
    // Get input values based on category
    const inputs = document.querySelectorAll(`.${category} input`);
    const points = Array.from(inputs).map(input => parseFloat(input.value) || 0);

    // Custom calculation logic based on your requirements
    const totalPrice = points.reduce((total, point) => total + point, 0);

    // Display the result
    const resultDiv = document.querySelector(`.${category} .result`);
    resultDiv.innerHTML = `Calculated Price: ${totalPrice.toFixed(2)} units`;
}

function convertToAktien() {
    // Implement your logic to convert calculated prices to Aktien
    const calculatedPrices = document.querySelectorAll('.result');
    const aktienResultDiv = document.getElementById('aktien-result');

    // For demonstration purposes, just concatenate the calculated prices
    const aktienValue = Array.from(calculatedPrices)
        .map((result, index) => `Position ${index + 1}: ${result.textContent}`)
        .join('<br>');

    // Display the Aktien result
    aktienResultDiv.innerHTML = aktienValue;
}






