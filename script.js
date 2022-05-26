let numberOfChars = document.getElementById('chars');
let lower = document.getElementById('lower');
let upper = document.getElementById('upper');
let num = document.getElementById('num');
let special = document.getElementById('special');
let words = document.getElementById('words');
let result = document.getElementById('result');

const generate = () => {
    let characters = '';
    let password = '';
    if (lower.checked) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (upper.checked) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (num.checked) {
        characters += '1234567890';
    }
    if (special.checked) {
        characters += "`~!@#$%^&*()_-+={[}]:;'\"<,>.?/|\\";
    }

    // for generating password from character pool
    for (let i = 0; i < numberOfChars.value; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    // for generating passowrd from random-words Node package
    
    
    let pass = document.createElement('li');
    pass.innerHTML = password;
    result.prepend(pass);
}