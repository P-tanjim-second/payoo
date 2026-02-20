document.querySelector('#bonus-btn').addEventListener('click', () => {
    const bonusInput = getValueFromInput('bonus-coupon');
    const bonusAmount = 100;
   
    if (bonusInput === 'PAYOO100' && !achieveBonus) {
        updateBalance(parseFloat(getCurrentBalance()) + bonusAmount);
        alert(`Congratulations! You've received a bonus of ${bonusAmount} units.`);
        achieveBonus = true;
    }
    else {
        alert('Invalid bonus code or bonus already claimed.');
    }
}); 
let achieveBonus = false;