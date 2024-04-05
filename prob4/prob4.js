const form = document.getElementById("inputForm");
const resultp = document.getElementById("resultp");

const nameError = document.getElementById('nameError');
const passwordError = document.getElementById('passwordError');
const emailError = document.getElementById('emailError');


form.addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/
    const emailPattern = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/

    isError = false

    if (username.length < 6) {
        console.log("username", username)
        isError = true
        nameError.textContent = 'Username must be at least 6 characters';
        nameError.style.display = 'block';
        };
    if (! passwordPattern.test(password)) {
        isError = true
        passwordError.textContent = 'Password must be at least 8 characters, contain at least 1 capital letter, and contain at least 1 number';
        passwordError.style.display = 'block';
        };
    if (! emailPattern.test(email)) {
        isError = true
        emailError.textContent = 'Email adress must be a valid email adress';
        emailError.style.display = 'block';
        };

    if (! isError) {
        resultp.textContent = "Input was valid! You're logged in";
        nameError.style.display = 'none';
        passwordError.style.display = 'none';
        emailError.style.display = 'none';
    };
});