$('#loginForm').submit(async function(event) {
    event.preventDefault(); // Prevent form submission
    const email = $('#email').val();
    const password = $('#password').val();

    // If validation passes, submit the form
    try {
        const res = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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
