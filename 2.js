const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const successMessage = document.getElementById('success-message');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    if (usernameInput.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    if (isValid) {
        successMessage.textContent = 'Registration successful!';
        form.reset();
    }
});
