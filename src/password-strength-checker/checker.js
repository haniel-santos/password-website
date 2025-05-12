const passwordInput = document.getElementById('passwordInput');
const checkBtn = document.getElementById('checkBtn');
const resultTitle = document.getElementById('resultTitle');
const strength = document.getElementById('strength');

checkBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const password = passwordInput.value;

    if (!password) {
        resultTitle.innerHTML = '<p class="warning">Please enter password first.</p>';

        return;
    }
    else {
        resultTitle.innerText = 'Your password\'s strength is:';
    }

    let score = 0;

    if (password.length >= 8) {
        ++score;
    }
    if (/[a-z]/.test(password)) {
        ++score;
    }
    if (/[A-Z]/.test(password)) {
        ++score;
    }
    if (/[0-9]/.test(password)) {
        ++score;
    }
    if (/[^\w\s]/.test(password)) {
        ++score;
    }

    const passwordStrength = ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'];
    const color = ['red', 'orange', 'yellow', 'greenyellow', 'green'];
    const index = Math.max(0, Math.min(score - 1, passwordStrength.length - 1));

    strength.innerText = passwordStrength[index];
    strength.style.color = color[index];
});

passwordInput.addEventListener('input', () => {
    strength.innerText = '';
});