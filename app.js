document.getElementById('calculateButton').addEventListener('click', calculateResults);

// Calculate Results
function calculateResults(e){
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
    }else{
        showError('Please check your numbers.');
    }
}




// show Error
function showError(error){
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
}