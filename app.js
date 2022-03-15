let calcButton = document.getElementById('calculateButton');

calcButton.addEventListener('click', function (e){
    // Hide Results
    document.getElementById('resultsContainer').style.display = "none";

    // Show Loader
    document.getElementById("loading").style.display = "block";

    setTimeout(calculateResults, 2000);
});
calcButton.addEventListener('mousedown', buttonDown);
calcButton.addEventListener('mouseup', buttonUp);

// Calculate Results
function calculateResults(){
    console.log("Calculating...");

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Monthly Payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        document.getElementById('resultsContainer').style.display = "flex";
        document.getElementById("loading").style.display = "none";

    }else{
        showError('Please Check Your Numbers');
    }
}


// show Error
function showError(error){

    document.getElementById('resultsContainer').style.display = "none";
    document.getElementById("loading").style.display = "none";

    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const wrapper = document.getElementById('wrapper');
    const titleContainer = document.getElementById('titleContainer');

    // Add Class
    errorDiv.className = "errorDiv";

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    wrapper.insertBefore(errorDiv, titleContainer);

    setTimeout(clearError, 3000);

}

// Clear Error
function clearError() {
    document.querySelector('.errorDiv').remove();
}

// Button Pressed down
function buttonDown(){
    calcButton.classList.remove('.style1');
    calcButton.className = "style2";
}
function buttonUp(){
    calcButton.classList.remove("style2");
    calcButton.className = "style1";
}