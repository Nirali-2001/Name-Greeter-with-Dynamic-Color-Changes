function greet() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    if (name) {
        greetingMessage.textContent = `Hello, ${name}!`;
    } else {
        greetingMessage.textContent = 'Please enter your name!';
    }
}

function changeColor() {
    const greetingMessage = document.getElementById('greetingMessage');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    greetingMessage.style.color = randomColor;
}
