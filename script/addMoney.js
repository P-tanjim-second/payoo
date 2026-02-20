document.getElementById('add-money-btn').addEventListener('click', () => {
    const bank = getValueFromInput('add-money-bank');
    const bankNumber = getValueFromInput('bank-number');
    const amount = getValueFromInput('add-money-input');
    const pin = getValueFromInput('add-money-pin');

    if (bank != 'Select Bank' && bankNumber.length == 11 && amount > 0 && checkPin(pin)) {
        updateBalance(getCurrentBalance() + parseFloat(amount));
        alert(`Successfully added ${amount} from ${bank} account number ${bankNumber} at ${new Date()}`);
    }
    else if (bank == 'Select Bank') {
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
        alert('Failed to add money. Please check your inputs and try again.');
    }
})