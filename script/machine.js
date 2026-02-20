function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}
function getCurrentBalance() {
    return parseFloat(document.getElementById('balance').innerText)
}
function updateBalance(amount) {
    document.getElementById('balance').innerText = parseFloat(amount).toFixed(2);
}