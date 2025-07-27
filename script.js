const form = document.getElementById('passwordform');
const message = document.getElementById('message');

form.addEventListener('submit',
    function (e) {
        e.preventDefault();

        const password = document.getElementById('password').value;

        if (password === "27") {
            window.location.href = "hbd.html";
        } else {
            message.textContent = "incorrect password.";
        }
    });
