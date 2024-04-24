$('#registrationForm').submit(async function(event) {
    event.preventDefault(); // Prevent form submission
    const username = $('#username').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const confirmPassword = $('#confirmPassword').val();

    // check confirm password
    if (password!=confirmPassword) {
        $('#error-message').html("Confirm password not match with password")
        return;
    }

    // If validation passes, submit the form
    try {
        const res = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password, confirmPassword }),
            headers: { 'Content-Type': 'application/json',
            'Accept': 'application/json' }
        })

        const data = await res.json();

        if (data.errors) {
            $('#error-message').html(data.errors)
        }

        if (data.user) {
            window.location.replace('/')
        }

    } catch (err) {
        console.log(err)
    }
});
