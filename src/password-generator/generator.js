const passLength = document.getElementById('passLength');
const generateBtn = document.getElementById('generateBtn');
const initialText = document.getElementById('initialText');
const password = document.getElementById('password');

const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const number = document.getElementById('number');
const special = document.getElementById('special');

const lowerSet = 'abcdefghijklmnopqrstuvwxyz';
const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberSet = '0123456789';
const specialSet = '~`!@#$%^&*()_+-={}[]:"|;\'\\<>?,./';

generateBtn.addEventListener('click', () => {
    const len = parseInt(passLength.value);

    if (!len || len < 4 || len > 256) {
        initialText.innerHTML = '<p class="warning">Please enter a valid password length (4 - 256).</p>';
        password.innerText = '';

        return;
    }
    else if (!lowercase.checked && !uppercase.checked && !number.checked && !special.checked) {
        initialText.innerHTML = '<p class="warning">Please include at least 1 character type.</p>';
        password.innerText = '';

        return;
    }
    else {
        initialText.innerText = '';
        password.innerText = '';
    }

    let charSet = '';
    let draftPassword = [];

    if (lowercase.checked) {
        charSet += lowerSet;
        draftPassword.push(randomIndex(lowerSet));
    }
    if (uppercase.checked) {
        charSet += upperSet;
        draftPassword.push(randomIndex(upperSet));
    }
    if (number.checked) {
        charSet += numberSet;
        draftPassword.push(randomIndex(numberSet));
    }
    if (special.checked) {
        charSet += specialSet;
        draftPassword.push(randomIndex(specialSet));
    }

    while (draftPassword.length < len) {
        draftPassword.push(randomIndex(charSet));
    }

    const finalPassword = shuffle(draftPassword).join('');
    password.innerText = finalPassword;
});

const randomIndex = (set) => {
    return set[Math.floor(Math.random() * set.length)];
}

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

passLength.addEventListener('input', () => {
    issueChecker();
});

const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        issueChecker();
    });
});

const issueChecker = () => {
    const len = parseInt(passLength.value);

    if (!len || len < 4 || len > 256) {
        initialText.innerHTML = '<p class="warning">Please enter a valid password length (4 - 256).</p>';
        password.innerText = '';
    }
    else if (!lowercase.checked && !uppercase.checked && !number.checked && !special.checked) {
        initialText.innerHTML = '<p class="warning">Please include at least 1 character type.</p>';
        password.innerText = '';
    }
    else {
        initialText.innerText = 'Generated password will be displayed here...';
        password.innerText = '';
    }
}

const copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', () => {
    const passText = password.innerText;
    if (passText) {
        navigator.clipboard.writeText(passText).then(() => {
            copyBtn.innerHTML = '<img src="../../assets/copy.svg" width="15px" alt="Copy Icon"> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = '<img src="../../assets/copy.svg" width="15px" alt="Copy Icon"> Copy';
            }, 2500);
        }) .catch((err) => {
            alert('Failed to copy password to clipboard!');
        });
    }
});
