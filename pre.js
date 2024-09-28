document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('signupForm').addEventListener('submit', handleSubmit);

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    
    if (email.length > 3 && email.includes('@') && email.includes('.')) {
        emailError.textContent = '';
        updateStatusMessage();
    } else {
        emailError.textContent = 'Invalid email format.';
        updateStatusMessage(false);
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    
    if (password.length >= 8) {
        passwordError.textContent = '';
        updateStatusMessage();
    } else {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        updateStatusMessage(false);
    }
}

function updateStatusMessage(isValid = true) {
    const statusMessage = document.getElementById('statusMessage');
    const emailError = document.getElementById('emailError').textContent;
    const passwordError = document.getElementById('passwordError').textContent;
    
    if (!emailError && !passwordError) {
        statusMessage.textContent = 'All good to go!';
        statusMessage.className = 'status success';
    } else if (!isValid) {
        statusMessage.textContent = '';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    const emailError = document.getElementById('emailError').textContent;
    const passwordError = document.getElementById('passwordError').textContent;
    
    if (!emailError && !passwordError) {
        const confirmSignup = confirm('Are you sure you want to sign up?');
        if (confirmSignup) {
            alert('Successful signup!');
        } else {
            document.getElementById('signupForm').reset();
            document.getElementById('statusMessage').textContent = '';
        }
    }
}
