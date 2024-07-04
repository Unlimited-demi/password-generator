document.getElementById('generateBtn').addEventListener('click', generatePasswords);

function generatePasswords() {
    const length = parseInt(document.getElementById('passwordLength').value) || 15;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;

    const password1 = generatePassword(length, includeSymbols, includeNumbers);
    const password2 = generatePassword(length, includeSymbols, includeNumbers);

    document.getElementById('password1').textContent = password1;
    document.getElementById('password2').textContent = password2;
}

function generatePassword(length, includeSymbols, includeNumbers) {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = letters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

function copyPassword(elementId) {
    const passwordText = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
        alert('Password copied to clipboard');
    }, () => {
        alert('Failed to copy password');
    });
}
