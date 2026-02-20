document.getElementById('send-money-btn').addEventListener('click', function() {
    const accountNumber = getValueFromInput('send-money-number');
    const amount = getValueFromInput('send-money-amount');
    const pin = getValueFromInput('send-money-pin');

    if (!accountNumber || !amount || !pin) {
        alert('Please fill in all fields.');
        return;
    }

    if (parseFloat(amount) > getCurrentBalance() || parseFloat(amount) <= 0) {
        alert('Your amount is not sufficient for this transaction.');
        return;
    }

    if (checkPin(pin) && accountNumber.length === 11) {
        const newBalance = (getCurrentBalance() - parseFloat(amount)).toFixed(2);
        updateBalance(newBalance);
        history('Send Money', new Date().toLocaleString());
        alert('Send Money successful!');
        return;
    }
    else{
        alert('Invalid account number or PIN. Please try again.');
    }
});