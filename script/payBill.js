document.querySelector('#pay-bill-btn').addEventListener('click', () => {
    const bankSelect = getValueFromInput('pay-bill-bank');
    const bankNumber = getValueFromInput('pay-bill-bank-number');
    const amount = parseFloat(getValueFromInput('pay-bill-amount'));
    const pin = getValueFromInput('pay-bill-pin');


    if (bankSelect != 'Select Bank' && bankNumber.length == 11 && amount > 0 && checkPin(pin)) {
        updateBalance(getCurrentBalance() - parseFloat(amount));
        alert(`Successfully paid ${amount} to ${bankSelect} account number ${bankNumber} at ${new Date()}`);
        history('Pay Bill', new Date().toLocaleString());
    }
    else if (bankSelect == 'Select Bank') {
        alert('Please select a bank');
    }
    else if (bankNumber.length != 11) {
        alert('Bank account number must be 11 digits long');
    }
    else if (amount <= 0) {
        alert('Amount must be greater than 0');
    }
    else if (!checkPin(pin)) {  
        alert('Invalid PIN');
    }
    else{
        alert('Failed to pay bill. Please check your inputs and try again.');
    }
});