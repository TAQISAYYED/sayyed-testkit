document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('message').innerText = '';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    let valid = true;

    if (username === '') {
        document.getElementById('usernameError').innerText = 'Username is required.';
        valid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
        valid = false;
    }

    if (valid) {
        // Simulate a successful login (you can replace this with an actual API call)
        if (username === 'admin' && password === 'password') {
            document.getElementById('message').innerText = 'Login successful!';
            document.getElementById('message').style.color = 'green';
            // Redirect to another page or perform further actions here
        } else {
            document.getElementById('message').innerText = 'Invalid username or password.';
            document.getElementById('message').style.color = 'red';
        }
    }
});