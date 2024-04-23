function isValidPassword(password) {
    if (password.length < 8) {return {valid: false, message: "Password must longer than 8"}}
    if (!/[A-Z]/.test(password)) {return {valid: false, message: "Password must contain upper case"}}
    if (!/[a-z]/.test(password)) {return {valid: false, message: "Password must contain lower case"}}
    if (!/\d/.test(password)) {return {valid: false, message: "Password must contain number"}}
    return {valid: true, message: ""}
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // check password
    let result = isValidPassword(password)
    if (!result.valid) {
        $('#error-message').html(result.message)
        return;
    }

    if (password !== confirmPassword) {
        $('#error-message').html("Passwords do not match");
        return;
    }

    // Here you can perform additional client-side validation, such as checking email format, password strength, etc.

    // If validation passes, submit the form
    this.submit();
});
