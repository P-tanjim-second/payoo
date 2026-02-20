document.getElementById('login-btn').addEventListener('click', () => {
    const mobileInput = document.getElementById('mobile-number');
    const pinInput = document.getElementById('pin-input');
    const mobileNumber = mobileInput.value;
    const pin = pinInput.value;
    console.log('Mobile Number:', mobileNumber);
    console.log('Pin:', pin);

    if (mobileNumber == "01234567890" && pin=="1234") {
        alert("Login successful!");
        window.location.assign("./home.html");
    }
    else{
        alert("Invalid mobile number or pin. Please try again.");
        return;
    }
})