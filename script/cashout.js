document.getElementById('cashout-btn').addEventListener('click', () => {
    const agentNumber = getValueFromInput('cashout-number');
    const amount = getValueFromInput('amount-input');
    const pin = getValueFromInput('cashout-pin');
    const currentBalance = getCurrentBalance();

    if (!agentNumber || !amount || !pin) {
        alert('Please fill in all fields.');
        return;
    }

    if (parseFloat(amount) > currentBalance || parseFloat(amount) <= 0) {
        alert('Your amount is not sufficient for this transaction.');
        return;
    }

    if (checkPin(pin) && agentNumber.length === 11) {
        const newBalance = (currentBalance - parseFloat(amount)).toFixed(2);
        updateBalance(newBalance);
        history('Cash Out', new Date().toLocaleString());
        alert('Cash Out successful!');
        return;
    }
    else{
        alert('Invalid agent number or PIN. Please try again.');
    }
});