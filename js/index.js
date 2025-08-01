document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const errorMsg = document.getElementById('errorMsg');

    loginBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const username = document.getElementById('Username').value.trim();
        const password = document.getElementById('Password').value;

        errorMsg.style.display = 'none';  // hide error by default

        if (username === 'vismal' && password === 'Vismal80127434.') {
            window.location.href = 'homepage.html';
        } else {
            errorMsg.style.display = 'block';
        }
    });
});
