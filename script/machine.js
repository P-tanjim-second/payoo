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

// transaction history data storage
function history(tranName, date) {
    const historyContainer = document.querySelector('.history-container');
    const transactionCard = document.createElement('div');
    transactionCard.innerHTML = `<div class="transaction-card py-3 px-4 bg-base-100 rounded-lg flex justify-between items-center">
                    <div class="flex gap-2">
                        <div class="bg-gray-100 p-2 rounded-full"><img src="assets/opt-1.png"></div>
                        <div>
                            <h4 class="font-bold text-gray-500">${tranName}</h4>
                            <p class="text-[12px] text-neutral/50">${date}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <span class="h-[2px] w-[2px] bg-gray-600 rounded-full"></span>
                        <span class="h-[2px] w-[2px] bg-gray-600 rounded-full"></span>
                        <span class="h-[2px] w-[2px] bg-gray-600 rounded-full"></span>
                    </div>
                </div>`
    historyContainer.appendChild(transactionCard);
}