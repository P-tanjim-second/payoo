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
function checkPin(givenPin) {
    const correctPin = '1234';
    return givenPin === correctPin;
}


// show the section that user clicked and hide the other section
const section = document.querySelectorAll('section');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (!button.classList.contains("bg-primary")) {
            buttons.forEach(btn => {
                btn.classList.remove('bg-primary');
                btn.classList.remove('text-white');
            });

        }
        button.classList.add('bg-primary');
        button.classList.add('text-white');
        if (section[index + 2].classList.contains('hidden')) {
            section[index + 2].classList.remove('hidden');
            section.forEach((sec) => {
                if (sec !== section[index + 2] && sec !== section[0] && sec !== section[1]) {
                    sec.classList.add('hidden');
                }
            })
        };
    });
});